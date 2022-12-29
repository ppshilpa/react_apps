import  {
  getPostListStarted, getPostListSuccess, getPostListError, addUpdatePostError,addUpdatePostSuccess,addUpdatePostStarted
} from "../actions/PostsActions";
import { Api } from "./actionTypes";
import { postApiRes } from "../reducers/postReducer";

// // get user list


export const getPostList = () => {
  return  async (dispatch: (arg0: { type: string; payload?: any; }) => void) =>  {
  dispatch(getPostListStarted());
  try {
    const res = await fetch(Api.posts);
    const data:postApiRes = await res.json();
    dispatch(getPostListSuccess(data));
  } catch (err) {
    dispatch(getPostListError(err));
  }
}
}

export const addUpdatePost = (formObj:{title: string, body: string, id?:number},method:string) =>  async (dispatch: (arg0: { type: string; payload?: any; }) => void) =>  {
    console.log(formObj);
    dispatch(addUpdatePostStarted());

    const apiUrl = method==='PUT'? `${Api.posts}/${formObj.id}`:Api.posts;
        let response = await fetch(apiUrl, {
           method: method,
           body: JSON.stringify({
              title: formObj.title,
              body: formObj.body
           }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
        });
        let data = await response.json();
        if(response.ok)
        dispatch(addUpdatePostSuccess(data));
        else dispatch(addUpdatePostError('User not added yet try after sometime.....'));
       // setFormData({title:'',body:''})

     };


