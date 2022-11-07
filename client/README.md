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

### add authorship for comments

![add authorship for comments](readmeAssets/auth-comment.png)

### check access token(wierd?)

![check access token](readmeAssets/check-access.png)

### add likes functionality

![likes functionality](readmeAssets/add-like-system.png)

### add material ui

```javascript
npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
npm install @mui/icons-material --legacy-peer-deps
```

![like button](readmeAssets/add-material-ui-icons.png)

### colorize liked post with page update

![colorize liked posts](readmeAssets/colorize-liked-posts.png)

### delete post functionality

![delete post logic](readmeAssets/delete-post.png)

### add profile card

![profile card](readmeAssets/profile-card.png)
