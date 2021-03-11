var APP_DATA = {
  "scenes": [
    {
      "id": "0-shooters-entry",
      "name": "Shooters Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.8699342420692853,
        "pitch": 0.029629764377755663,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 1.6336426882997914,
          "pitch": 0.3545505157396889,
          "rotation": 0,
          "target": "1-hotspot-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hotspot-1",
      "name": "Hotspot 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.4333346844741719,
        "pitch": 0.2593766256486809,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -0.429623531777068,
          "pitch": 0.29519893023194044,
          "rotation": 0,
          "target": "2-hotspot-2"
        },
        {
          "yaw": -3.0343539581262746,
          "pitch": 0.36237284584879603,
          "rotation": 0.7853981633974483,
          "target": "0-shooters-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hotspot-2",
      "name": "Hotspot 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.483206431886103,
        "pitch": 0.16059949298489684,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 1.3722543449502371,
          "pitch": 0.5393013852067714,
          "rotation": 0,
          "target": "1-hotspot-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
