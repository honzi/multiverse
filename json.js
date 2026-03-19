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
    restart();
}

function restart(){
    webgl_level_load({
      'character': -1,
      'json': level_json,
    });
    core_escape(false);
}
