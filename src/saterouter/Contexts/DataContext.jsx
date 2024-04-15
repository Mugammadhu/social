/* eslint-disable react/prop-types */
import {  createContext } from "react";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import useWindowSize from '../hooks/useWindowSize'
import { useNavigate } from "react-router-dom";
import api from '../Api/post'


const DataContext=createContext({});

export const DataProvider = ({children}) => {

    const [search, setSearch] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([{
    "id": "1",
    "title": "1st post",
    "description": "march 13 2022 07:23:34 AM",
    "body": "good morning guys"
  },{
    "id": "2",
    "title": "2st post",
    "description": "june 15 2023 04:23:34 AM",
    "body": "good evening guys"
  },
  {
    "id": "3",
    "title": "3rd post",
    "description": "november 23 2020 08:22:36 AM",
    "body": "good night guys"
  }]);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const {width}=useWindowSize()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMM,dd,yyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error : ${err.message}`);
        }
      }
    };
    fetchDetails();
  }, []);

  useEffect(() => {
    const filteredData = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredData.reverse());
  }, [search, posts]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id) => {
    const datetime = format(new Date(), "MMM,dd,yyy pp");
    const updatedData = { id, title: editTitle, datetime, body: editBody };
    try {
      const response =await api.put(`/posts/${id}`, updatedData);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate('/');
    } catch (err) {
      console.log("Error:${err.message}");
    }
  };


  return (
    <DataContext.Provider value={{width,search,setSearch,searchResult, postTitle,
        setPostTitle,postBody,setPostBody,handleSubmit, handleDelete, posts, handleUpdate,editTitle, setEditTitle, editBody,setEditBody}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext;

