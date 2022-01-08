const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = (event) => {
    console.log("y", window.scrollY, "x", window.scrollX);
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};