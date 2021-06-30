from flask.cli import AppGroup
from .users import seed_users, undo_users
from .destinations import seed_destinations, undo_destinations
from .lodgings import seed_lodgings, undo_lodgings

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_destinations()
    seed_lodgings()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_destinations()
    undo_lodgings()
