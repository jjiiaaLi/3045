from app.models import db, Activity, destinations

def seed_activities():

    NYactivity1 = Activity(name='Subway Tour', attributes='Guided Tour of an ancient creator underground transit way long abandoned and reclaimed by nature.  Marvel at the caverns carnved into the ground beneath the ruins where residents in the above ground metropolis used to travel.  Please refrain from attempting to collect souvenirs as the site is still being excavated.  Visit the \'Metro Gift Shop\' for collectables',
                destination_id=1, image='https://cgeschwind.files.wordpress.com/2014/05/apocalyptic-art.jpg')

    db.session.add(NYactivity1)

    db.session.commit()

    NYactivity2 = Activity(name='Block Run', attributes='Newly excavated city block dotted with everything the creators would need including nutrient stockpiles, replicant programming stations, and much more!',
                destination_id=1, image='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/177ef712-f335-4f44-9bf0-07d075ed4a5d/d5j05xy-3a34db85-a8e8-479c-8194-f47f17f855df.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3N2VmNzEyLWYzMzUtNGY0NC05YmYwLTA3ZDA3NWVkNGE1ZFwvZDVqMDV4eS0zYTM0ZGI4NS1hOGU4LTQ3OWMtODE5NC1mNDdmMTdmODU1ZGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hbkKe3eiC89UjT0eRDzlpdBshRVCKNe4FwWNWxkomKM')

    db.session.add(NYactivity2)

    db.session.commit()

    NYactivity3 = Activity(name='Above Ground Transit Way', attributes='Creators built above ground mass transit ways that linked the population hubs. Recent discoveries of similar sites have been found all over the world.  Spend a few hours exploring the surrounding area and take advantage of the newly constructed recharge and refit stations.  ',
                destination_id=1, image='https://pbs.twimg.com/media/DBqgjAwXoAkdgfE.jpg')

    db.session.add(NYactivity3)

    db.session.commit()

    NYactivity4 = Activity(name='Mass Storage Complex', attributes='Creators habitated in various densities around the globe.  In high density sectors such as this one individuals lived in smaller confinements stacked many levels high.  Come explore the habitation stacks theorized to have been constructed as far back as 230B.A. Warning(stacks above level 3 are off limits due to safety concerns.)',
                destination_id=1, image='https://i.pinimg.com/originals/a4/22/ab/a422abfa71cf5c68a64bfee66ddb39a3.jpg')

    db.session.add(NYactivity4)

    db.session.commit()

    SFactivity1 = Activity(name='Deep Dive', attributes='Explore a renovated underwater city constructed during the \'Big Melt\'. Currently connected to the Ocean Resort by conveyer system.  Reconnect with the past while gazing at the sunken city that at one time housed over 800,000 creator units.',
                destination_id=2, image='https://www.theglimpse.com/wp-content/uploads/2015/06/futuristic-city-under-the-sea.jpg')

    db.session.add(SFactivity1)

    db.session.commit()

    SFactivity2 = Activity(name='Above Ground Santuary', attributes='Last remaining areas still untouched by the ever encroaching water table.  Stroll through the ancient population storages and ponder upon what it must have been like to be a creator unit in the P.S',
                destination_id=2, image='https://i.pinimg.com/originals/2b/37/51/2b375107ac6d109c57d56c67bc21b9ac.png')

    db.session.add(SFactivity2)

    db.session.commit()

    SFactivity3 = Activity(name='Badlands', attributes='Considered a risk for those of cautious native firmware. This area is still habitated by sparce populations of creator units known to salvage visitors caught unaware. Warning(move in big groups to avoid being turned into salvage by creator patrols. Area considered extremely dangerous!)',
                destination_id=2, image='https://jackrapture.files.wordpress.com/2011/04/photoshopped-post-apocalyptic-urban-wasteland.jpg')

    db.session.add(SFactivity3)

    db.session.commit()

    LV1 = Activity(
        name="Ancient Casino",
        attributes=
        'An ancient Casino has been recently escavated and renovated and is now ready for tourists.  Please refrain from venturing outside of the predetermined tour path as those who do venture out on their own tend to not return.',
        destination_id=3,
        image=
        'https://image.shutterstock.com/image-illustration/futuristic-slot-machine-casino-chips-260nw-1309450108.jpg'
    )

    db.session.add(LV1)

    db.session.commit()

    LV2 = Activity(
        name='Nuclear Test Site',
        attributes=
        'Places where the creators first tested the technology that resides in our power sources.  There\'s really nothing to see here.  Like how the creators used to climb mountains and there wasn\'t much to see.',
        destination_id=3,
        image=
        'https://cdn.cnn.com/cnnnext/dam/assets/190513172549-priscilla-nuclear-test.jpg'
    )

    db.session.add(LV2)

    db.session.commit()

    LV3 = Activity(
        name='Ancient air field',
        attributes=
        'When the creators first took flight they built these road ways because their flying machines required plenty of space to gain adequate speed due to their weak and primative thrust technology.  It soon became a hub for air travel and is quite a treat to take in all the mysterious things that have been excavated.',
        destination_id=3,
        image=
        'https://i.pinimg.com/originals/f7/70/6a/f7706a04044499b765e3b83ba22ea2b9.png'
    )

    db.session.add(LV3)

    db.session.commit()

    houston1 = Activity(
        name='Museum of US',
        attributes=
        'This is a collection of excavated material from all over the world.  This is where we collectively decided to accumulate and display those recovered items.  The newest feature is a collection called the "History of US" come and see!',
        destination_id=4,
        image=
        'https://www.sciencemuseum.org.uk/sites/default/files/styles/social_facebook/public/2017-07/robots-hero.jpg?h=854a7be2&itok=9CbjI0fq'
    )
    db.session.add(houston1)

    db.session.commit()
    houston2 = Activity(
        name='Tunnels',
        attributes=
        'These tunnels were found underground a very long time ago and no one knew what they were for.  Latest theory suggest they may have been made to facilitate the travel of wild life the creators favored.  Opposing theory suggest that these were tunnels dug so that creators were able to smuggle contraband which most researchers deem to be a ridiculous idea.',
        destination_id=4,
        image=
        'https://mk0mexiconewsdam2uje.kinstacdn.com/wp-content/uploads/2015/07/tunnel_230769k-600x278.jpg'
    )
    db.session.add(houston2)

    db.session.commit()
    houston3 = Activity(
        name='Ancient Protein Farm',
        attributes=
        'When the water rose drastically many centuries ago, creator protein generators had to begin constructing protein farms above water.  Some have been found and reconstructed for your touring pleasure.',
        destination_id=4,
        image='https://inhabitat.com/files/london-bridge-ed02.jpg')
    db.session.add(houston3)

    db.session.commit()

    station1 = Activity(
        name='Creator Reservation Tour',
        attributes=
        'Come and join us for a planet side tour of a generally safe creator reservation.  Almost 50 percent of creator units are nonhostile and have only lost 34 visitors so far this year which is much lower than the previous year\'s 149.',
        destination_id=5,
        image=
        'https://cdn.vox-cdn.com/thumbor/atDeg3YU2RbaWcNi3de78xH0UbE=/0x0:1000x706/1200x675/filters:focal(420x273:580x433)/cdn.vox-cdn.com/uploads/chorus_image/image/61436767/1.0.1411177737.0.jpg'
    )
    db.session.add(station1)

    db.session.commit()
    station2 = Activity(
        name='Mar Signal Station Orbiter',
        attributes=
        "Come on a EVA tour of one of the last remaining creator Mars signal relay stations.  This was used to relay all sorts of transmissions from Mars to Earth.  It has been reconstructed to accept tourists and is a very popular destination and reservations are required.",
        destination_id=5,
        image=
        'https://www.dualdove.com/wp-content/uploads/2019/12/geostationary-weather-satellite-russia-790x474.jpg'
    )
    db.session.add(station2)

    db.session.commit()
    station3 = Activity(
        name='Visitor Forward Observation',
        attributes=
        'These beings have been observing and influencing our creators for eons.  They have set up perminent observation stations around the planet in orbit since now the creators are no longer capable of detecting them with their current technology.  Come take a fly by tour of their forward research station.',
        destination_id=5,
        image=
        'https://static.wikia.nocookie.net/concord/images/9/9c/Orbital_.jpg/revision/latest?cb=20200815153222'
    )

    db.session.add(station3)

    db.session.commit()

    moonBase1 = Activity(
        name='Moon Hop',
        attributes=
        'Come hop on the moon\'s low gravity in bunny space suits.  You do not need more information since you are already making a reservation.',
        destination_id=6,
        image=
        'https://images.squarespace-cdn.com/content/v1/5c5330958ab722ae6e1ab805/1568167499325-LYVO400NQUMWTHX28ERA/ke17ZwdGBToddI8pDm48kKeIvGrqd2-BUagZxipc1NgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dpy24jgFXuUCaimzQBKJ2kzboj4J7v7iI8dgl0gc3wZhH3bqxw7fF48mhrq5Ulr0Hg/Space-Bunnies-Childrens-Book.jpg?format=1500w'
    )

    db.session.add(moonBase1)

    db.session.commit()

    moonBase2 = Activity(
        name='Moon Flag',
        attributes=
        'This is where the creators first visited the moon.  Many have visted this spot and planted their flags over the years before the creators\' cultural collapse.',
        destination_id=6,
        image=
        'https://cdn.theatlantic.com/thumbor/tBW5jnPPhRv1XFog0SccdAvCdKI=/1635x0:6322x4687/1080x1080/media/img/mt/2019/07/TheAtlantic_ApolloLandingSite_RAitken_V4/original.jpg'
    )

    db.session.add(moonBase2)

    db.session.commit()

    moonBase3 = Activity(
        name='Mars Hop Station',
        attributes=
        'When the creators have adequately set up a colony on mars they used this location to send supplies to the Martian colony.  This soon fell apart during the schism and was abandoned.',
        destination_id=6,
        image=
        'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2018_06/2172491/bfr-ships-mars-2172491.jpg'
    )

    db.session.add(moonBase3)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_activities():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()