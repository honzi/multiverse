'use strict';

function new_game(){
    webgl_level_load({
      'character': {
        'collides': true,
        'controls': 'rpg',
        'gravity': 1,
        'level': 0,
        'model': {},
      },
      'json': {
        'picking': 2,
        'characters': [
          {
            'id': 'dream',
            'base': true,
            'spawn': false,
            'entities': [
              {
                'id': 'base',
                'texture': 'grid.png',
                'texture_x': 10,
                'texture_y': 10,
                'vertex_colors': [
                  .5, .5, .5, 1,
                ],
                'vertices': [
                  50, 0, -50,
                  -50, 0, -50,
                  -50, 0, 50,
                  50, 0, 50,
                ],
              },
            ],
          },
        ],
      },
    });
}

function repo_escape(){
    audio_state_all(!core_menu_open);
}

function repo_init(){
    core_repo_init({
      'events': {
        'new_game': {
          'onclick': new_game,
        },
        'screenshot': {
          'onclick': webgl_screenshot,
        },
      },
      'info': '<button class=medium id=new_game type=button>Restart</button><button class=medium id=screenshot type=button>Screenshot</button>',
      'keybinds': {
        'Backquote': {
          'down': webgl_character_automove,
        },
      },
      'link': 'https://github.com/honzi/multiverse',
      'menu': true,
      'owner': 'Honzi',
      'pointerbinds': {
        'contextmenu': {},
        'pointermove': {
          'todo': function(){
              webgl_controls_pointer();
          },
        },
        'pointerup': {
          'todo': webgl_pick,
        },
        'wheel': {
          'todo': webgl_controls_wheel,
        },
      },
      'root': 'index.htm',
      'storage_controls': true,
      'title': 'Multiverse',
    });

    new_game();
}
