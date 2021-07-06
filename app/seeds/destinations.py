from app.models import db, Destination

# Adds a demo user, you can add other users here if you want
def seed_destinations():

    city1 = Destination(name='Sector Alpha 16BZ Lima 957-H29', summary='Abandoned creator population hub with rustic features. Take a scenic stroll through 300 square miles of twisted concrete labyrinth and stay awhile at lodgings repurposed according to your specs.  Individuals with soy-based wire insulation visit at your own risk',
                images='https://i.pinimg.com/originals/8b/25/78/8b25784db97a2528223c5a2d5cdb2673.jpg,\
                    https://www.wallpaperflare.com/static/660/848/833/apocalyptic-city-ruin-new-york-city-wallpaper.jpg,\
                    https://www.iliketowastemytime.com/sites/default/files/post-apocalyptic-new-york-wallpaper-1920x1200.jpg,\
                    https://i.pinimg.com/originals/0f/f3/5d/0ff35d6d48f0dec060bb28596ff4db46.jpg,\
                    https://cdn.cms.prod.nypr.digital/images/041110crysis1.2e16d0ba.fill-661x496.jpg'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                )

    db.session.add(city1)

    db.session.commit()

    city2=Destination(name="Z159798663_0081", summary='Sea side creator hub known for it\'s foggy climate and abundant ocean fauna.  Now 64.53 percent under water.  Home to a small population of creators mostly near the shore area',
                images='https://i.pinimg.com/originals/6c/47/39/6c4739d8bf8b3bb9c7e123cb22361a79.jpg,\
                    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXW6TCSh9gAnmrw1MBf9aLbNTx7VK83p3sA&usqp=CAU,\
                        https://i.pinimg.com/originals/c8/59/ce/c859ce02df9e538e3ab3ea1ec392ffec.jpg,\
                            https://i.pinimg.com/originals/44/7c/3e/447c3ef1ede69974d5009a77767dafe5.jpg,\
                                https://i.pinimg.com/originals/2e/93/7b/2e937b5e054e43a99916c9f8526b5748.jpg'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                )


    db.session.add(city2)

    db.session.commit()

    city3 = Destination(
        name='Sector 37NV-Echo_B9237',
        summary=
        'Used to be a creator desert oasis with miniaturized sceneries from around the globe.  Circa 2 centuries before the flood the site was abandoned.  Now it is a subtropical region with most of the past burried beneath layers of wind derived sediment.',
        images=
        'https://i.pinimg.com/originals/92/e7/de/92e7de8e1aa56cbbdb5db2934c0b0b7f.jpg, https://i.pinimg.com/originals/56/03/88/5603885d91b29eea9ea01a8631da0155.jpg, https://cdn.80.lv/api/upload/content/12/5d2c609a199d7.jpg,https://i.pinimg.com/originals/57/f9/7c/57f97c91967fb6466211964afc3d02a4.jpg,https://ak.picdn.net/shutterstock/videos/4862795/thumb/1.jpg'
    )

    db.session.add(city3)
    db.session.commit()

    city4 = Destination(
        name='Part-9 ZZ_238956',
        summary=
        'Before the "Great Exodus" the creators had a large population hub in this area.  Region designated "Part-9" as it was one of the first areas to undergo excavation due to the rapid errosion making it a higher priority site to recover.  There hasn\'t been creator activity reported for over 4 centuries but recent discoveries of detritis indicates that this might be false.',
        images=
        'https://miro.medium.com/max/1024/1*UPM1RDmNyWPis1w8kBdBtw.jpeg,https://i.pinimg.com/originals/c9/48/cc/c948ccdd545e7f047e861e55e04698e7.jpg,https://i.pinimg.com/originals/af/3e/5b/af3e5b4d5c01c7c5a59439b0f5ca2f52.jpg,https://cdnb.artstation.com/p/assets/images/images/000/276/805/large/1.jpg?1414659350,https://i.pinimg.com/originals/40/64/f7/4064f71d140d1827caac5ee4bca7c526.jpg,https://cdna.artstation.com/p/assets/images/images/005/692/890/large/sam-warren-apocalypse-street-2.jpg?1493062412'
    )

    db.session.add(city4)
    db.session.commit()

    city5 = Destination(
        name='Orbiter-19_H7',
        summary=
        "Constructed shortly A.C 163 it has now been decommissioned and turned into a tourist spot.  Although a bit more contained and feature light compared to planet side destinations, the wait list is never the less quite long.",
        images=
        'https://cdnb.artstation.com/p/assets/images/images/013/412/127/medium/mitchell-stuart-ftl-dock3.jpg?1539495743,https://i.insider.com/5db0becedee01911b86c93ea?width=1000&format=jpeg&auto=webp,https://assets.newatlas.com/dims4/default/dff33f8/2147483647/strip/true/crop/1726x1080+0+0/resize/1440x901!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Forion-space-hotel-3.jpeg,https://static.euronews.com/articles/stories/05/71/07/70/1440x810_cmsv2_207f5fe2-c532-535e-934a-ff79b92df452-5710770.jpg,https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklZVwQ9lAnhm7zsM8lg3ZH_VazdDlVxoQuw&usqp=CAU'
    )

    db.session.add(city5)
    db.session.commit()

    city6 = Destination(
        name='SAT-PS5',
        summary=
        'Satelite planet side sector5 is another decommissioned base now reconfigured for your vacation needs.  Used to be a layover site for creator expeditions that was escavated almost 6 centuries ago.  The facilities are limited but the experience is well worth it.  ',
        images=
        'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2013/01/multi-dome_base_being_constructed/12502111-1-eng-GB/Multi-dome_base_being_constructed_pillars.jpg,https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklZVwQ9lAnhm7zsM8lg3ZH_VazdDlVxoQuw&usqp=CAU,https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGiQ1nifRM3CARTOOImZoMIeEtsYhMZw-H5T8zhGvKqJN661mGjVd8lcCZz_Zl1ey7JcU&usqp=CAU,https://apuedge.com//wp-content/uploads/AdobeStock_117828744-e1551216167979.jpeg,https://museumsvictoria.com.au/media/7841/moonbase-one-image.png'
    )

    db.session.add(city6)
    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_destinations():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
