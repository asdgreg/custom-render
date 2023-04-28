const home = {
    "id": "root",
    "type": "div",
    "props": {
      "className": "container"
    },
    "children": [
      {
        "id": "divhead",
        "type": "div",
        "props": {
          "className": "div"
        },
        "children": [
          {
            "id": "title",
            "type": "h1",
            "props": {
                "text": "My Website"
            },
            "children": null
          }
        ]
      },
      {
        "id": "main",
        "type": "main",
        "props": null,
        "children": [
          {
            "id": "section1",
            "type": "section",
            "props": {
              "className": "section1"
            },
            "children": [
              {
                "id": "content1",
                "type": "p",
                "props": {
                  "text": "Welcome to my website! This is some example content."
                },
                "children": null
              }
            ]
          },
          {
            "id": "section2",
            "type": "section",
            "props": {
              "className": "section2"
            },
            "children": [
                {
                    "id": "title",
                    "type": "h3",
                    "props": {
                        "text": "WORKING TO BE DYNAMIC"
                    },
                    "children": null
                  },
              {
                "id": "content2",
                "type": "p",
                "props": {
                    "text": "Check out this other section for more interesting content."
                  },
                "children": null
              },
              {
                "id": "button",
                "type": "button",
                "props": {
                  "onClick": "alert('You clicked the button!')",
                  "text": "Click me"
                },
                "children": null
              }
            ]
          }
        ]
      },
      {
        "id": "footer",
        "type": "footer",
        "props": {
          "className": "footer"
        },
        "children": [
          {
            "id": "copyright",
            "type": "p",
            "props": {
                "text": "© 2023 My Website. All rights reserved."
            },
            "children": null
          }
        ]
      }
    ]
  }

  export default home;