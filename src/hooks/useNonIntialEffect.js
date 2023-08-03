import { useEffect, EffectCallback, DependencyList, useRef } from "react";

/**
 * This hook gets called only when the dependencies change but not during initial render.
 *
 * @param {effect} effect The `useEffect` callback function.
 * @param {deps} deps An array of dependencies.
 *
 * @example
 * ```
 *  useNonInitialEffect(()=>{
 *      alert("Dependency changed!");
 * },[dependency]);
 * ```
 */
export const useNonInitialEffect = (effect, deps) => {
	const initialRender = useRef(true);

	useEffect(() => {
		

        if (initialRender.current) {
			initialRender.current = false;
		} else {
			effect();
		}
	}, deps);
};