'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'restart': {
          'onclick': restart,
        },
      },
      'info': '<button class=medium id=restart type=button>Restart</button>',
      'keybinds': {
        'Backquote': {
          'down': function(){
              webgl_characters[webgl_character_id].automove = !webgl_characters[webgl_character_id].automove;
          },
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
          'todo': webgl_pick_entity,
        },
        'wheel': {
          'todo': webgl_controls_wheel,
        },
      },
      'storage_controls': true,
      'title': 'Multiverse',
    });

    const level = globalThis.location.search.substring(1);
    const element = document.createElement('script');
    element.src = 'js/' + (level ? level : 'train') + '.js';
    element.onload = restart;
    document.head.appendChild(element);
}

function restart(){
    webgl_level_load({
      'character': {
        'camera_zoom': 25,
        'collides': true,
        'controls': 'rpg',
        'gravity': 1,
        'level': 0,
        'lives': 1,
        'model': {},
      },
      'json': level_json,
    });
    core_escape(false);
}
