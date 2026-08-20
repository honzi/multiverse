globalThis.level_json = JSON.parse(`
{
  "spawn": {
    "position_y": 10,
    "position_z": 100
  },
  "characters": [
    {
      "id": "beach",
      "base": true,
      "spawn": false,
      "entities": [
        {
          "id": "sand_above",
          "rotate_z": 5,
          "texture": "lavaleaf.png",
          "vertex_colors": [1, 1, 0, 1],
          "vertices": [
            500, 0, -500,
            0, 0, -500,
            0, 0, 500,
            500, 0, 500
          ]
        },
        {
          "id": "sand_below",
          "rotate_z": 5,
          "texture": "lavaleaf.png",
          "vertex_colors": [
            0.5, 0.5, 0, 1,
            0, 0, 1, 1,
            0, 0, 1, 1,
            0.5, 0.5, 0, 1
          ],
          "vertices": [
            0, 0, -500,
            -700, 0, -500,
            -700, 0, 500,
            0, 0, 500
          ]
        },
        {
          "id": "water_top",
          "alpha": 0.6,
          "collision": false,
          "texture": "lavaleaf.png",
          "vertex_colors": [0, 0, 1, 1],
          "vertices": [
            0, 0, -500,
            -700, 0, -500,
            -700, 0, 500,
            0, 0, 500
          ]
        },
        {
          "id": "water_bottom",
          "alpha": 0.6,
          "area": {
            "density": 0.01,
            "x_min": -700,
            "y_min": -100,
            "z_max": 500,
            "z_min": -500
          },
          "collision": false,
          "rotate_x": 180,
          "texture": "lavaleaf.png",
          "vertex_colors": [0, 0, 1, 1],
          "vertices": [
            0, 0, -500,
            -700, 0, -500,
            -700, 0, 500,
            0, 0, 500
          ]
        }
      ]
    }
  ],
  "prefabs": [
    {
      "type": "webgl_primitive_ellipsoid",
      "properties": {
        "color_bottom0": [1, 1, 0, 1],
        "color_bottom1": [0, 0.2, 1, 1],
        "color_top0": [0, 0, 1, 1],
        "color_top1": [0, 0, 0.5, 1],
        "groups": ["skybox"],
        "prefix": "skybox",
        "radius_x": -99,
        "radius_y": -99,
        "radius_z": -99,
        "slices_latitude": 6,
        "slices_longitude": 2
      }
    }
  ]
}
`);
