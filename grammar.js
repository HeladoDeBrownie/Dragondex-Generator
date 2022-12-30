var grammar = tracery.createGrammar({
    'origin':       'SPECIES: #species name#\n#stat 1#\n#stat 2#\n#stat 3#\n\n#description#\n\nCOMPATIBLE WITH: #compatibility#',

    /* species names */

    'species name': '#species name prefix.capitalize##species name suffix#',
    'species name prefix': [
        'drak',
        '#body part#',
        '#color#',
        '#element#',
        '#emotion#',
        '#prefixes that want to be matched with -gon#',
        '#size#',
    ],
    'species name suffix': [
        'breath',
        'don',
        'dra',
        'drak',
        'drake',
        'gon',
        'saur',
        'zard',
        '#body part#',
    ],
    'body part': [
        'claw',
        'fang',
        'scale',
        'snout',
        'wing',
    ],
    'prefixes that want to be matched with -gon': [
        'carcino',
        'cryo',
        'hydro',
        'nitro',
        'para',
        'patho',
        'poly',
    ],
    'color': [
        'blue',
        'bronze',
        'copper',
        'gold',
        'gray',
        'green',
        'red',
        'silver',
        'yellow',
    ],
    'element': [
        'aero',
        'pulmo',
        'aqua',
        'hydro',
        'igneo',
        'pyro',
        'gaia',
        'terra',
        'alma',
        'pneuma',
    ],
    'emotion': [
        'awe',
        'doom',
        'dread',
        'gloom',
        'terror',
        'woe',
        'wonder',
    ],
    'size': [
        'big',
        'great',
        'mega',
        'lil',
        'mini',
        'tiny',
    ],

    /* stats */

    'stat 1': '#stat 1 name# #stat value#',
    'stat 1 name': [
        'APTITUDE:         ',
        'MEMORY:           ',
        'WISDOM:           ',
        'WITS:             ',
        'DEADLINESS:       ',
        'FEARSOMENESS:     ',
        'MIGHT:            ',
        'VALOR:            ',
    ],

    'stat 2': '#stat 2 name# #stat value#',
    'stat 2 name': [
        'ENDURANCE:        ',
        'FLEXIBILITY:      ',
        'HARDNESS:         ',
        'SPEED:            ',
        'KINESTHETIC SENSE:',
        'PAIN TOLERANCE:   ',
        'PATIENCE:         ',
        'SELF-PRESERVATION:',
    ],

    'stat 3': '#stat 3 name# #stat value#',
    'stat 3 name': [
        'COMMUNICATION:    ',
        'EMPATHY:          ',
        'FRIEND-SHAPEDNESS:',
        'HELPFULNESS:      ',
        'PULCHRITUDE:      ',
        'SELF-AWARENESS:   ',
        'TEMPERAMENT:      ',
        'UNASSUMINGNESS:   ',
    ],

    'stat value': [
        '#common stat value#', '#common stat value#', '#common stat value#', '#common stat value#', '#common stat value#', '#common stat value#',
        '#unusual stat value#', '#unusual stat value#', '#unusual stat value#',
        '#rare stat value#',
    ],
    'common stat value': ['★★☆☆☆ ', '★★★☆☆ ', '★★★★☆ '],
    'unusual stat value': ['★☆☆☆☆ ', '★★★★★ '],
    'rare stat value': ['☆☆☆☆☆ ', '★★★★★★'],

    /* description */

    'description': ['#concrete fact# #abstract fact#'],

    'concrete fact': [
        'It #eats# #diet#.',
        'It #inhabits# #type of place#.',
        'It #likes# #thing#.',
    ],

    'eats': [
        'derives most of its nutrition from',
        'eats',
        'preys on',
        'subsists on',
    ],
    'diet': [
        'fruits',
        'humans',
        'lesser beasts',
        'other dragons',
        'nuts',
        'rocks',
        '#human food# stolen from humans',
    ],
    'human food': [
        'bread',
        'burritos',
        'spaghetti',
        'steak',
    ],

    'inhabits': [
        'inhabits',
        'is often found in',
        'lives in',
    ],
    'type of place': [
        'clouds',
        'forests',
        '#human places#',
        'swamps',
    ],
    'human places': [
        'basements',
        'chimneys',
        'houses',
        'kitchens',
        'the walls of houses',
    ],

    'likes': [
        // positive
        'enjoys',
        'likes',
        'prefers',
        // negative
        'dislikes',
        'is repulsed by',
        'shuns',
    ],
    'thing': [
        'company',
        'darkness',
        'moonlight',
        'the scent of #scented thing#',
        'solitude',
        'sunlight',
    ],
    'scented thing': [
        'dew',
        'flowers',
        'garbage',
        'perfume',
        'seawater',
        'sulfur',
        '#diet#',
    ],

    'abstract fact': [
        '#legend intro# #legend content#',
        'It is #endangered# due to #endangerment reason#.',
        'Whenever you #presence notification# #at a time#, #it is there#.'
    ],

    'legend intro': [
        "It's said that",
        'Legends say',
        'Rumor has it',
        'Scientists have observed that',
    ],

    'legend content': [
        'it can #destroy# #a destroyable item# with its #body part#.',
        'it can out#maneuver# #a vehicle#.',
        'it only appears to those pure of heart.',
    ],

    'destroy': [
        'crush',
        'destroy',
        'tear through',
    ],

    'a destroyable item': [
        'a boulder',
        'a house',
        '#a vehicle#',
    ],

    'maneuver': [
        'dig',
        'fly',
        'run',
        'swim',
    ],

    'a vehicle': [
        'a car',
        'a chariot',
        'a cruise missile',
        'a freight ship',
        'a helicopter',
        'a sailboat',
        'a train',
    ],

    'endangered': [
        'almost extinct',
        'at threat of extinction',
        'critically endangered',
    ],

    'endangerment reason': [
        'being outcompeted for food',
        'food scarcity',
        'overhunting',
        'pollution',
    ],

    'presence notification': [
        'are overwhelmed with #fear#',
        'feel #feeling#',
        'hear #sound#',
        'smell #smell#',
    ],
    'fear': [
        'anxiety',
        'apprehension',
        'dread',
        'fear',
        'terror',
    ],
    'feeling': [
        'a weariness deep in your bones',
        'an unshakable chill',
    ],
    'sound': [
        'a deep rumbling',
        'a distant chiming',
        'indistinct whispers',
    ],
    'smell': [
        '#scented thing#',
        'something rotting',
        'something sickly sweet',
    ],
    'at a time': [
        'after someone has died',
        'during a joyous celebration',
        'in the dead of night',
        'on a dewy morning',
        'on a rainy day',
        'while no one else is in the room',
    ],
    'it is there': [
        'be ready for it',
        'it is already too late',
        'it is there',
        "run and don't look back",
        'you are about to be visited',
    ],

    /* compatibility */

    'compatibility': [
        '#species name#',
        '#species name#',
        '#species name# and #species name#',
        '#species name#, #species name#, and #species name#',
        'others of its species',
        'others of its species',
        'none; do not house with other dragons',
    ],
})

grammar.addModifiers(baseEngModifiers)
