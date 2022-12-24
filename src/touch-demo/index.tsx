import { useMemoizedFn } from "ahooks";
import { useEffect, useRef } from "react";
import "./index.less";

export const TouchDemo = () => {
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  const handleClickDiv1 = useMemoizedFn((e) => {
    console.log("div1", {
      target: e.target.innerHTML,
      eventPhase: e.eventPhase
    });
  });

  const handleClickDiv2 = useMemoizedFn((e) => {
    console.log("div2", {
      target: e.target.innerHTML,
      eventPhase: e.eventPhase,
      tagName: e.target.tagName
    });
    // e.stopPropagation();
  });

  const handleClickDiv2Pop = useMemoizedFn((e) => {
    console.log("div2", {
      target: e.target.innerHTML,
      eventPhase: e.eventPhase
    });
    e.stopPropagation();
  });

  const handleClickDiv3 = useMemoizedFn((e) => {
    console.log("div3", {
      target: e.target.innerHTML,
      eventPhase: e.eventPhase
    });
  });

  const handleClickDiv4 = useMemoizedFn((e) => {
    console.log("div4", {
      target: e.target.innerHTML,
      eventPhase: e.eventPhase
    });
  });

  useEffect(() => {
    // 捕获阶段响应
    div1Ref.current.addEventListener("click", handleClickDiv1, {
      capture: true
    });
    div2Ref.current.addEventListener("click", handleClickDiv2, {
      capture: true
    });
    div3Ref.current.addEventListener("click", handleClickDiv3, {
      capture: true
    });
    div4Ref.current.addEventListener("click", handleClickDiv4, {
      capture: true
    });

    // 冒泡阶段响应
    div1Ref.current.addEventListener("click", handleClickDiv1, {
      capture: false
    });
    div2Ref.current.addEventListener("click", handleClickDiv2, {
      capture: false
    });
    div3Ref.current.addEventListener("click", handleClickDiv3, {
      capture: false
    });
    div4Ref.current.addEventListener("click", handleClickDiv4, {
      capture: false
    });
    return () => {
      div1Ref.current.removeEventListener("click", handleClickDiv1, {});
      div2Ref.current.removeEventListener("click", handleClickDiv2, {});
      div3Ref.current.removeEventListener("click", handleClickDiv3, {});
      div4Ref.current.removeEventListener("click", handleClickDiv4, {});
    };
  }, [
    handleClickDiv1,
    handleClickDiv2,
    handleClickDiv2Pop,
    handleClickDiv3,
    handleClickDiv4
  ]);

  return (
    <div className="div1" ref={div1Ref}>
      1
      <div className="div2" ref={div2Ref}>
        2
        <div className="div3" ref={div3Ref}>
          3
          <div className="div4" ref={div4Ref}>
            4
          </div>
        </div>
      </div>
    </div>
  );
};
