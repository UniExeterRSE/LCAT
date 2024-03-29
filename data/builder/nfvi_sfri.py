# Development before 2024 Copyright (C) Then Try This and University of Exeter
# Development from 2024 Copyright (C) University of Exeter
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the Common Good Public License Beta 1.0 as
# published at http://www.cgpl.org
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# Common Good Public License Beta 1.0 for more details.

# This script creates a command line interface for building and updating
# the climate tool database, as well as providing documentation of the
# recipes for how it's done

# nfvi_sfri data is stored on lsoa, so this script transfers them
# directly to lsoa and averages them from the others

# we want to bake these values into the main geojsons so they are
# optimised for reading

from shapely.geometry import shape, Point

cols = [  # "nfvi",	"nfvi_sus", "nfvi_prp", "nfvi_res", "nfvi_rec", "nfvi_com",
    # "age", "health", "income", "info", "loc_know", "tenure", "mobility",
    # "crime", "house_typ", "flood_exp", "service", "soc_net",
    "a1",
    "a2",
    "h1",
    "h2",
    "i1",
    "i2",
    "i3",
    "i4",
    "i5",
    "f1",
    "f2",
    "k1",
    "t1",
    "t2",
    "m1",
    "m2",
    "m3",
    "c1",
    "l1",
    "e1",
    "s1",
    "s2",
    "s3",
    "s4",
    "n1",
    "n2",
    "n3",
]


def prepare_cols(db, table, cols):
    for col in cols:
        q = f"alter table {table} add column if not exists {col} real default 0;"
        db.cur.execute(q)
    db.conn.commit()


def import_to_lsoa(db):
    prepare_cols(db, "lsoa", cols)
    q = f"select lsoa11cd from lsoa;"
    db.cur.execute(q)
    lsoa_codes = db.cur.fetchall()

    cols_q = ", ".join(cols)

    for n, lsoa_code in enumerate(lsoa_codes):
        q = f"select {cols_q} from nfvi_sfri where code = '{lsoa_code[0]}'"
        db.cur.execute(q)
        vals = db.cur.fetchall()[0]
        sets = []
        for idx, col in enumerate(cols):
            sets.append(f"{col}='{float(vals[idx])}'")
        q = f"update lsoa set {', '.join(sets)} where lsoa11cd='{lsoa_code[0]}'"
        db.cur.execute(q)
        print(lsoa_code[0])
        print(n / float(len(lsoa_codes)) * 100)
        db.conn.commit()


def import_to_table(db, table, sing):
    prepare_cols(db, table, cols)
    # use hierarchy to speed this up
    # for each msoa
    q = f"select gid from {table};"
    db.cur.execute(q)
    for geo_id in db.cur.fetchall():
        q = f"select lsoa from hierarchy_lsoa_to_{table} where {sing}={geo_id[0]}"
        db.cur.execute(q)
        lsoas = [str(x[0]) for x in db.cur.fetchall()]
        if len(lsoas) > 0:
            # find averages for the regions we contain
            cols_avg = []
            for col in cols:
                cols_avg.append("avg(" + col + ")")
                cols_q = ", ".join(cols_avg)

            # take from lsoa gids
            q = f"select {cols_q} from lsoa where gid in ({', '.join(lsoas)})"
            db.cur.execute(q)
            avgs = [str(x) for x in db.cur.fetchone()]
            # update the msoa with these values
            sets = []
            for idx, col in enumerate(cols):
                sets.append(col + "=" + avgs[idx])

                q = f"update {table} set {', '.join(sets)} where gid='{geo_id[0]}';"
                db.cur.execute(q)
                db.conn.commit()
        else:
            print("empty")
        print(geo_id[0])


def import_to_regions(db):
    pass
