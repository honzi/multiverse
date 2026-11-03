globalThis.level_json = JSON.parse(`
{
  "ambient_color": [0.15, 0.15, 0.15],
  "camera_zoom_max": 0,
  "fog_end": 666,
  "spawn": {
    "position_y": 4,
    "position_z": 25
  },
  "characters": [
    {
      "id": "forest",
      "base": true,
      "spawn": false,
      "entities": [
        {
          "attach_y": 0.1,
          "collision": false,
          "texture": "goal.png",
          "vertex_colors": [1, 1, 1, 1],
          "vertices": [
            10, 0, -10,
            -10, 0, -10,
            -10, 0, 10,
            10, 0, 10
          ]
        }
      ]
    }
  ],
  "prefabs": [
    {
      "type": "webgl_primitive_cuboid",
      "properties": {
        "bottom": {
          "texture_x": 9,
          "texture_y": 9
        },
        "position_y": 33,
        "size_x": -1332,
        "size_y": -66,
        "size_z": -1332,
        "vertex_colors": [0, 0.5, 0, 1],
        "texture": "lavaleaf.png"
      }
    },
    {
      "type": "webgl_primitive_area",
      "properties": {
        "area": {
          "particle": true,
          "randomize": true,
          "speed_y": 0.2,
          "x_max": 3,
          "x_min": -3,
          "y_max": 15,
          "y_min": -2,
          "z_max": 3,
          "z_min": -3
        },
        "draw_mode": "LINE_LOOP",
        "vertex_colors": [1, 0, 0, 1],
        "entities": [
          {
            "light_color": [1, 0.7, 0],
            "light_range": 99,
            "vertices": 100
          }
        ]
      }
    },
    {
      "type": "webgl_primitive_cuboid",
      "properties": {
        "bottom": false,
        "position_y": 33,
        "position_z": -86,
        "size_x": 25,
        "size_y": 66,
        "size_z": 25,
        "vertex_colors": [0, 1, 0, 1],
        "texture": "wood.png",
        "top": false
      }
    },
    {
      "type": "webgl_prefab_repeat",
      "properties": {
        "type": "webgl_primitive_cuboid",
        "count": 42,
        "properties": {
          "bottom": false,
          "size_x": 25,
          "size_y": 66,
          "size_z": 25,
          "vertex_colors": [0, 1, 0, 1],
          "texture": "wood.png",
          "top": false
        },
        "x_max": 666,
        "x_min": -666,
        "y_max": 33,
        "y_min": 33,
        "z_max": -100,
        "z_min": -666
      }
    },
    {
      "type": "webgl_prefab_repeat",
      "properties": {
        "type": "webgl_primitive_cuboid",
        "count": 42,
        "properties": {
          "bottom": false,
          "size_x": 25,
          "size_y": 66,
          "size_z": 25,
          "vertex_colors": [0, 1, 0, 1],
          "texture": "wood.png",
          "top": false
        },
        "x_max": 666,
        "x_min": -666,
        "y_max": 33,
        "y_min": 33,
        "z_max": 666,
        "z_min": 100
      }
    }
  ]
}
`);
