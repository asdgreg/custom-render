{
  "id": "root",
  "type": "div",
  "props": {
    "className": "container"
  },
  "children": [
    {
      "id": "header",
      "type": "header",
      "props": {
        "className": "header"
      },
      "children": [
        {
          "id": "logo",
          "type": "img",
          "props": {
            "src": "logo.png",
            "alt": "My Logo"
          }
        },
        {
          "id": "title",
          "type": "h1",
          "props": {
            "className": "title"
          },
          "children": [
            {
              "id": "text",
              "type": "text",
              "props": {},
              "children": "Welcome to my site!"
            }
          ]
        }
      ]
    },
    {
      "id": "content",
      "type": "section",
      "props": {
        "className": "content"
      },
      "children": [
        {
          "id": "paragraph",
          "type": "p",
          "props": {},
          "children": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        }
      ]
    }
  ]
}