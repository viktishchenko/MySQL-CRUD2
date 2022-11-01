// "Ctrl" + "Space" → code // shortcut

# init client side

```javascript
mkdir client
cd cli + "Tab" → client
type nul > README.md
npx create-react-app .
```

### client side API request

```javascript
npm i axios
```

### add post render with basic css

![post render](readmeAssets/posts-render.png)

### add react-router-dom

```javascript
npm i reacr-router-dom
```

### check links

![add routes](readmeAssets/add-routes-start.png)
![add routes](readmeAssets/add-routes.png)

### add formik

```javascript
npm i formik
```

![add formik](readmeAssets/add-formik.png)

### add yup form validator

```javascript
npm i yup
```

![create post functionality](readmeAssets/create-post-functionality.png)

### post params

```javascript
/* rafce */
import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  let { id } = useParams();
  console.log("id", id);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Post: {id}</h1>
    </div>
  );
};

export default Post;
```

![post params](readmeAssets/post-params.png)

### get post id fom db

![specify route](readmeAssets/spcify-route.png)

### get single post from db

![get single post](readmeAssets/single-post.png)
![single post client](readmeAssets/single-post-client.png)

<!-- Shift + Alt + A → Alt + 26 → Ctrl + Space → code -->

### add comment section with logic & styles

![add comment section](readmeAssets/add-comment-logic.png)

### add registration

![login form in action](readmeAssets/login-info.png)
