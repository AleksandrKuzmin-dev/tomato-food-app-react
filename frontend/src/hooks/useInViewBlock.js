import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { setHomeNavActive} from "../store/slices/homeNavActive.slice";

const useInViewBlock = (itemName, threshold = 0.7) => {

    const dispatch = useDispatch();

    const { ref, inView } = useInView({
        threshold
    });

    useEffect(() => {
        inView && dispatch(setHomeNavActive(itemName));
    }, [inView]);


  return [ref];
}

export default useInViewBlock;