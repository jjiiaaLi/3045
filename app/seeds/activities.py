from app.models import db, Activity

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
                destination_id=2, image='https://miro.medium.com/max/1600/0*5NxPK8PDeOoGKLKK.jpg')

    db.session.add(SFactivity1)

    db.session.commit()

    SFactivity2 = Activity(name='Above Ground Santuary', attributes='Last remaining areas still untouched by the ever encroaching water table.  Stroll through the ancient population storages and ponder upon what it must have been like to be a creator unit in the B.A',
                destination_id=2, image='https://i.pinimg.com/originals/2b/37/51/2b375107ac6d109c57d56c67bc21b9ac.png')

    db.session.add(SFactivity2)

    db.session.commit()

    SFactivity3 = Activity(name='Badlands', attributes='Considered a risk for those of cautious native firmware. This area is still habitated by sparce populations of creator units known to salvage visitors caught unaware. Warning(move in big groups to avoid being turned into salvage by creator patrols. Area considered extremely dangerous!)',
                destination_id=2, image='https://jackrapture.files.wordpress.com/2011/04/photoshopped-post-apocalyptic-urban-wasteland.jpg')

    db.session.add(SFactivity3)

    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_activities():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()