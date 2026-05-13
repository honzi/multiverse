'use strict';

function repo_escape(){
    audio_state_all(!core_menu_open);
}

function repo_init(){
    core_repo_init({
      'events': {
        'restart': {
          'onclick': restart,
        },
        'screenshot': {
          'onclick': webgl_screenshot,
        },
      },
      'info': '<button class=medium id=restart type=button>Restart</button><button class=medium id=screenshot type=button>Screenshot</button>',
      'keybinds': {
        'Backquote': {
          'down': function(){
              webgl_character_automove();
          },
        },
      },
      'link': 'https://github.com/honzi/multiverse',
      'menu': true,
      'menu_lock': true,
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

    const level = globalThis.location.search.substring(1);
    document.title += ': ' + level + '.json';
    core_script({
      'src': 'js/' + (level ? level : 'train') + '.js',
      'todo': restart,
    });
}

function restart(){
    if(core_menu_lock
      && !globalThis.level_json){
        return;
    }

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
    core_menu_lock = false;
    core_escape(false);
}
