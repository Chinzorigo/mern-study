
import  Functions  from "../components/Functions";
// import Clock from "../components/Clock";
// import LoginControl from "../components/LoginControl";

function HomePage() {
    // const [flag, setFlag] = useState(true);
    
    // const toggle = () => {
    //     console.log("Toggle Clicked");
    //     setFlag(!flag);
    // }

    // const posts = [
    //     {
    //         id: 1,
    //         title: "Hello 1",
    //         content: "asdfasdfasdf"
    //     },
    //     {
    //         id: 2,
    //         title: "Hello 2",
    //         content: "asdfasdfasdf"
    //     },
    //     {
    //         id: 3,
    //         title: "Hello 3",
    //         content: "asdfasdfasdf"
    //     },
    //     {
    //         id: 4,
    //         title: "Hello 4",
    //         content: "asdfasdfasdf"
    //     },
    //     {
    //         id: 5,
    //         title: "Hello 5",
    //         content: "asdfasdfasdf"
    //     }
    // ]

  return (
    <>

    {/* <button onClick={() => setFlag(!flag)}>Toggle clock component</button> */}
    {/* {!flag ? <Clock /> : "No Clock component"} */}
    {/* <LoginControl />    */}
    {/* <Blog posts={posts}/> */}
    <Functions />
    </>

  );
}

export default HomePage;
