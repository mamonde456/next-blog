"use strict";
const {Fragment: _Fragment, jsx: _jsx, jsxs: _jsxs} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Tanstack Query의 ", _jsx(_components.code, {
        children: "useQuery"
      }), "를 미니멀하게 클론 코딩하며 생긴 궁금증을 정리한 글이다.", _jsx(_components.br, {}), "\n", _jsx(_components.code, {
        children: "useEffect"
      }), "의 동작 과정, 클린업 함수, 그리고 Race Condition까지 학습한 내용을 흐름에 따라 풀어보았다."]
    }), "\n", _jsx(_components.p, {
      children: "useEffect를 공부하며 Race Condition이 왜 발생하는지, 그리고 useEffect의 동작 과정을 배우고, 클린업 함수까지 흘러가는 방향대로 학습할 예정이다."
    }), "\n", _jsxs(_components.h3, {
      id: "흐름",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#흐름",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "흐름"]
    }), "\n", _jsx(_components.p, {
      children: "useEffect에 대해서 - useEffect의 동작 과정 - useEffect의 클린업 - useEffect의 Race Condition"
    }), "\n", _jsxs(_components.h3, {
      id: "사전-학습",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#사전-학습",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "사전 학습"]
    }), "\n", _jsx(_components.p, {
      children: "useEffect를 공부하기 전에, useState를 사전학습하고 오길 바란다. useEffect 또한, state와 연관이 있고, useState를 학습하며 알게 되는 내용이 나온다. 따라서 state에 관해 학습했다면, 이해하기 수월할 거라 생각한다. 그러나 state에 관해 학습하지 않았더라도, 복습하는 생각으로 해당하는 내용에 대해 간략히 설명할 예정이다. 또한, useEffect에 대해서도 어느정도 알고 있다는 전제로 글을 쓰겠다."
    }), "\n", _jsxs(_components.h1, {
      id: "useeffect",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#useeffect",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "useEffect"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://ko.react.dev/reference/react/useEffect",
        children: "https://ko.react.dev/reference/react/useEffect"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(setup, dependencies"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// useEffect(()=> {...}} // 리렌더링마다 실행"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// useEffect(()=> {...},[]} // 한 번만 실행"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// useEffect(()=> {...},[state]} // state가 변화될 때마다 실행"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "useEffect는 리액트 컴포넌트 최상위 레벨에서 호출하여 사용할 수 있다. setup 함수와 종속성 배열(옵셔널)을 매개변수로 넣을 수 있는데, useEffect는 마운트된 이후 실행된다."
    }), "\n", _jsxs(_components.p, {
      children: ["종속성(dependencies)에 빈 배열을 작성하거나, 배열을 열고, 내부에 의존성 값을 넣는다면, 의존성이 변화할 때마다 useEffect가 호출된다. React는 각각의 의존성들을 ", _jsx(_components.a, {
        href: "http://object.is/",
        children: "Object.is"
      }), " 비교법을 통해 이전과 비교하고, 종속성에 아무것도 넣지 않았을 때는 리렌더링될 때마다 실행된다."]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "📎 의존성에 컴포넌트 내부에서 선언된 함수나 객체를 넣으면 안 된다. 함수나 객체는 리렌더링마다 새롭게 생성되어 이전에 생성된 객체와 다르다고 판단하기 때문에 useEffect는 의존성이 변화했다고 판단한다. 따라서 리렌더링마다 호출되어 실행할 것이다."
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "useeffect의-상태-참조",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#useeffect의-상태-참조",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "useEffect의 상태 참조"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Counter"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\tconst"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "]"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\treturn"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t\t<"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t\t\t<"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">{count}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\t\t<"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{()=> "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "+1)}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\t</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t)"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "버튼을 누르면, count의 값은 증가한다. 그리고 화면에는 최신 상태의 count가 출력될 것이다. 이건 어떻게 동작하는 걸까? useEffect의 상태 참조에 앞서 useState의 상태 참조를 간략히 살펴보자."
    }), "\n", _jsxs(_components.h3, {
      id: "usestate의-단순한-변수-참조",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#usestate의-단순한-변수-참조",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "useState의 단순한 변수 참조"]
    }), "\n", _jsx(_components.p, {
      children: "useState의 count가 변경되면, 화면은 리렌더링된다. 정말 정확히 말하면, state가 변경되었다고 렌더링 트리거가 눌리는 것이 아니다. setState가 호출됨으로써 렌더링을 유발하고, 화면이 변경되는 것이다."
    }), "\n", _jsx(_components.p, {
      children: "useState는 비동기로 상태를 업데이트한다. 렌더링이 트리거 되고, 리액트 컴포넌트 내에 있는 setState를 모두 모아서 하나의 업데이트로 일괄 처리한다. 그렇다면, 아래의 예시를 보자"
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Counter"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\tconst"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "]"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\tconst"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\t\tsetCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(count"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\t\tsetCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(count"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\t\tsetCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(count"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t}"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\treturn"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t\t<"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t\t\t<"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">{count}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\t\t<"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{handleClick}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\t</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t)"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "여기서 예상할 수 있는 건, count가 3번 증가되는 것이다. 그러나 사실 전혀 그렇지 않다. count는 한 번만 증가할 것이다. 이런 결과가 나오는 것은 setCount를 실행할 때, count를 참조했다는 점이다."
    }), "\n", _jsx(_components.p, {
      children: "왜 count를 참조하게 되면, 한 번만 증가할까? 리액트는 현재 상태를 알고 있는데, 렌더링마다 state와 props 값을 살펴본다. 달리 말하면, 렌더링이 되기 전에는 값이 변경되지 않는다는 뜻이다. 시간이 지난다고 count 값이 변경되는 것이 아니라 렌더링을 통해 count 값이 변경되었음을 알고 새롭게 화면에 출력한다. 따라서 setCount를 호출하면 리렌더링이 발생하는 것이다."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// count = 0 "
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\t\tsetCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(count"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 0 + 1 = 1"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\t\tsetCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(count"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 0 + 1 = 1"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\t\tsetCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(count"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 0 + 1 = 1"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "다음과 같은 동작이 일어나 count는 1이 될 수밖에 없다. 렌더링이 일어나야지 count는 1이 된다. 이건 count를 참조하는 모든 코드에서 일어나는 일이다. 그게 함수가 될 수도 있고, setTimeout 등이 될 수 있다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "결론적으로, 렌더링이 일어나면, 그 내부에서 props와 state는 같은 상태로 유지된다."
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "useeffect와-렌더링",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#useeffect와-렌더링",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "useEffect와 렌더링"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Counter"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    document.title "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " `You clicked ${"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "} times`"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  });"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">You clicked {"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "} times"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{() => "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " + 1)}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "Click me"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  );"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "useEffect 내부에서 count를 참조하고 코드를 실행하면, 처음에는 당연히 초기값인 0이 나올 것이다. count가 변화하면, 변화한 값이 다시 출력된다. 아까 setState는 리렌더링을 유발한다고 했다. 그리고 렌더링이 되면, 리액트 컴포넌트는 코드를 다시 실행한다. useEffect는 count를 어떻게 참조하는 걸까?"
    }), "\n", _jsxs(_components.p, {
      children: ["count의 값은 렌더링이 되기 전까지 유지된다. useEffect 또한 마찬가지인데, ", _jsx(_components.strong, {
        children: "렌더링마다 새로운 useEffect가 존재한다."
      }), " 따라서 상태를 참조하는 useEffect가 렌더링마다 존재한다고 이해하면 되겠다."]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "공식문서 참고"
      }), "\n", _jsx(_components.p, {
        children: _jsx(_components.a, {
          href: "https://ko.react.dev/learn/synchronizing-with-effects#each-render-has-its-own-effects",
          children: "https://ko.react.dev/learn/synchronizing-with-effects#each-render-has-its-own-effects"
        })
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "따라서 리액트는 여러번의 렌더링에서 새롭게 시작하는 렌더링의 Effect를 적용하기 전에 이전에 실행된 Effect를 정리해야 한다. 그래서 useEffect에 클린업 함수가 존재하고, 클린업 함수를 작성하지 않으면 여러개의 Effect가 중첩되어 실행되는 걸 확인할 수 있을 것이다."
    }), "\n", _jsxs(_components.h3, {
      id: "클로저와-상태값",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#클로저와-상태값",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "클로저와 상태값"]
    }), "\n", _jsx(_components.p, {
      children: "리액트는 렌더링마다 새롭게 코드를 실행한다. 함수도 새로운 함수 객체를 만들고, 렌더링마다 useEffect도 존재한다. 그럼, state의 값은 왜 유지되는 걸까? 코드가 새롭게 실행된다면, state 값도 계속 0으로 유지되어야 하지 않을까?"
    }), "\n", _jsx(_components.p, {
      children: "이건, useState가 클로저에 의존하고 있기 때문이다. 클로저는 계속 값을 참조하고 있기 때문에 렌더링 이후에도 값이 유지되는 것이다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "그러나 위의 얘기는 함수형 컴포넌트에 해당한다. 클래스 컴포넌트에서는 다르게 동작한다."
      }), "\n"]
    }), "\n", _jsxs(_components.h3, {
      id: "useeffect와-호출-시점",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#useeffect와-호출-시점",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "useEffect와 호출 시점"]
    }), "\n", _jsx(_components.p, {
      children: "useEffect는 종속성 배열에 따라 호출 시점이 달라진다."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(()"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{}) "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 초기 렌더링 및 모든 재렌더링에서 실행됨."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(()"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{},[]) "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 초기 렌더링에서 한 번만 실행됨."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(()"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{},[state]) "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 초기 렌더링 및 state 값이 변경될 때 실행됨."
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "클린업 함수, 역시 useEffect가 실행되는 호출 시점에 따라 useEffect의 실행 전에 동작한다. 한마디로, 클린업 함수는 항상 새로운 useEffect가 실행되기 전에 동작한다고 생각하면 된다."
    }), "\n", _jsxs(_components.h3, {
      id: "useeffect의-생명주기",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#useeffect의-생명주기",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "useEffect의 생명주기"]
    }), "\n", _jsx(_components.p, {
      children: "컴포넌트의 생명주기는 아래와 같다."
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "컴포넌트는 화면에 추가될 때 마운트된다."
      }), "\n", _jsx(_components.li, {
        children: "상호작용을 통해 새로운 props나 state를 수신하면 업데이트된다. (state, props가 변경)"
      }), "\n", _jsx(_components.li, {
        children: "컴포넌트가 화면에서 제거되면 언마운트된다."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "그러나 useEffect는 컴포넌트와 독립적으로 생각하는 것이 좋다. useEffect는 별도의 생명주기를 가진다. 컴포넌트는 마운트, 업데이트, 언마운트로 돌아가지만, useEffect는 동기화, 동기화 중지라고 생각해도 좋다."
    }), "\n", _jsx(_components.p, {
      children: "useEffect에는 종속성 배열이 있기 때문에 의존성 값에 따라 실행되고, 이전 effect가 정리될 수도(클린업) 있다. 그러니 컴포넌트의 생명주기와 동일하게 볼 수 없는 것이다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["📎 ", _jsx(_components.strong, {
          children: "대신 항상 한 번에 하나의 시작/중지 사이클에만 집중하세요. 컴포넌트를 마운트, 업데이트 또는 마운트 해제하는 것은 중요하지 않습니다. 동기화를 시작하는 방법과 중지하는 방법만 설명하면 됩니다. 이 작업을 잘 수행하면 필요한 횟수만큼 effect를 시작하고 중지할 수 있는 탄력성을 확보할 수 있습니다."
        }), _jsx(_components.br, {}), "\n", _jsx(_components.em, {
          children: "리액트 공식 문서 본문 중…"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "클래스형 컴포넌트와도 사뭇 다른 점을 가진다. 클래스형 컴포넌트에서는 필요한 시점마다 메서드를 사용하여 관리할 수 있었다."
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "componentDidMount()"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "componentDidUpdate()"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "componentWillUnmount()"
        })
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "useEffect에서는 생명주기 메서드 대신, 동작과정에서 일정 부분 컨트롤할 수 있게 되었다. 컴포넌트가 마운트된 이후, useEffect가 실행되며, 의존성 값의 변화에 따라 재실행한다. 또한 컴포넌트가 언마운트되면 클린업 함수를 실행하는데, 클래스형 컴포넌트와도 다른 지점을 쉽게 찾을 수 있다."
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "컴포넌트 마운트 → useEffect 실행"
      }), "\n", _jsx(_components.li, {
        children: "props, state, 의존성 값 업데이트 → useEffect 재실행"
      }), "\n", _jsx(_components.li, {
        children: "컴포넌트 언마운트 → 클린업 함수 실행"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "위와 같은 동작을 거치기 때문에 컴포넌트와의 생명주기와 별도의, 독립적인 존재로 이해해야 한다는 것이다."
    }), "\n", _jsxs(_components.h2, {
      id: "useeffect의-클린업-함수",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#useeffect의-클린업-함수",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "useEffect의 클린업 함수"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(()"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t..."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\treturn"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ()"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{}  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 클린업 함수"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "})"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "useEffect의 클린업 함수는 무엇일까?"
    }), "\n", _jsx(_components.p, {
      children: "useEffect는 외부 시스템과 연결할 때 사용하는 훅이다. 여기서 외부 시스템이란, 채팅 서버, 애니메이션, 브라우저 이벤트 수신, setInterval과 같은 비동기 등이 있다."
    }), "\n", _jsx(_components.p, {
      children: "여기서 생각할 수 있는 것은 채팅 서버와의 연결, 애니메이션의 실행, 브라우저 이벤트 구독 등을 실행한 뒤, 다른 페이지로 넘어간다고 했을 때 올바른 동작이다. 기본적으로 지금의 컴포넌트(컴포넌트가 속한 페이지이거나)가 언마운트되면, useEffect에 작성한 외부 시스템과의 연결이 해지되어야 한다. 이를 위해, 클린업 함수가 존재하는 것이다."
    }), "\n", _jsx(_components.p, {
      children: "클린업 함수는 useEffect의 실행보다 우선적으로 실행된다. 단, 이전에 등록된 useEffect가 있을 경우에, 해당 effect를 정리하는 함수가 실행되는 것으로 초기 렌더링에서는 실행된다 한들 동작하지 않는다."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "초기 렌더링 "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "->"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " useEffect 실행"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "->"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 재렌더링 "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "->"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 이전 useEffect의 클린업 함수 실행 "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "->"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 새로운 useEffect 실행"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "->"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 언마운트 "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "->"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 마지막 useEffect 클린업 함수 실행 "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "->"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " 종료"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "왜-클린업-함수를-사용해야-하나요",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#왜-클린업-함수를-사용해야-하나요",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "왜 클린업 함수를 사용해야 하나요?"]
    }), "\n", _jsx(_components.p, {
      children: "앞서 설명했듯이, 클린업 함수는 useEffect가 실행되기 전에 동작한다. 그리고 useEffect는 외부 시스템(부수 효과)과의 연결을 위해 사용한다. 예를들어, 채팅 서버에 연결한다고 할 때, 사용자가 연결 도중 페이지를 변경하여 다른 채팅 서버와 연결을 한다고 가정해보자. 여기서 클린업 함수를 사용하지 않았더라면, 채팅 서버는 중첩 연결이 될 것이다. 이는 예상치 못한 동작, 오류를 발생할 수 있다."
    }), "\n", _jsx(_components.p, {
      children: "따라서 클린업 함수에 채팅 서버와의 연결을 종료하는 로직을 넣어, 언마운트, 종속성이 변경되었을 때 종료할 수 있도록 해야한다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "개발 모드에서는 엄격 모드로 인해 마운트 직후에 setup + cleanup 함수가 한 번 더 실행된다."
      }), "\n"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "📎 useEffect는 클린업 함수를 반환하지 않는다. 빈 클린업 함수를 반환한 것처럼 동작하며 useEffect에서 반환값을 사용할 수 없다. (useEffect는 undefined를 반환한다)"
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "useeffect와-race-condition",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#useeffect와-race-condition",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "useEffect와 Race Condition"]
    }), "\n", _jsxs(_components.h3, {
      id: "race-condition이란",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#race-condition이란",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Race Condition이란?"]
    }), "\n", _jsx(_components.p, {
      children: "공유 자원에 대해 둘 이상의 프로세스가 동시에 접근을 시도할 때, 접근의 타이밍이나 순서 등이 결과값에 영향을 줄 수 있는 상태를 말한다. 쉽게 말해, 비동기 통신에서 두 번 이상의 요청이 발생했을 때, 결과값이 덮어씌워지는 것이라 이해하면 된다."
    }), "\n", _jsxs(_components.h3, {
      id: "usestate도-race-condition이-일어나는-게-아닌가요",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#usestate도-race-condition이-일어나는-게-아닌가요",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "useState도 Race Condition이 일어나는 게 아닌가요?"]
    }), "\n", _jsx(_components.p, {
      children: "예전에 useState의 동작에 대해 이해하지 못하고 사용하던 시절이 있었다. 그때는 상태를 업데이트하고 최신상태를 바로 확인하고자 했었는데, 이전 상태값이 나와 어리둥절했었다."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " handleFucntion"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\tsetState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\tconsole."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state)"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "위의 동작은 useState를 제대로 알지 못하고 사용하는 것이다. useState는 값을 바로 업데이트하지 않는다."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "state"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 1"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 1"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 1"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 1"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "여러 번의 setState를 해도 기대했던 4의 값은 얻을 수 없다. 그렇다면, 이건 Race Condition일까? 여러개의 setState가 state에 접근하려고 해서 발생하는 것일까? 이건 useState의 동작과 관련되어 있는 것으로 Race Condition이 일어나는 게 아니다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["💡 이처럼 ", _jsx(_components.code, {
          children: "useState"
        }), "도 비동기적으로 상태를 처리하기 때문에, 마치 Race Condition처럼 느껴질 수 있다. 하지만 이는 실제로는 React의 일괄 처리(batch update)와 렌더링 타이밍 문제에 가까우며, 진짜 Race Condition은 ", _jsx(_components.code, {
          children: "useEffect"
        }), " 내부에서 비동기 요청이 동시에 발생할 때 더 큰 문제를 야기한다."]
      }), "\n"]
    }), "\n", _jsxs(_components.h3, {
      id: "race-condition-발생-원인",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#race-condition-발생-원인",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Race Condition 발생 원인"]
    }), "\n", _jsx(_components.p, {
      children: "fetch 요청이 중복되거나, setTimeout/setInterval이 여러 개 실행되는 상황에서 Race Condition이 발생할 수 있다. 의도치 않은 이전 데이터가 나중에 반영되는 것이 문제인데, 아래는 간단한 예제들이다."
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "JavaScript - fetch"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "async"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " fetchUserData"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "userId"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " response"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`https://api.example.com/users/${"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "userId"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " data"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " response."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"Fetched Data:\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", data);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " data;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 동시에 여러 요청을 보냄"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 이전 요청이 최신 요청보다 늦게 도착하여, 이전 데이터가 최신 데이터를 덮어버림."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "fetchUserData"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "fetchUserData"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "2"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "fetchUserData"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "JavaScript에서 fetch를 통해 여러번의 요청을 보낼 때, Race Condition을 어떤 식으로 방지할 수 있을까?"
    }), "\n", _jsx(_components.p, {
      children: "AbortController 를 이용해 요청을 중단할 수 있다. 다만, AbortController는 fetch에서만 사용할 수 있다는 점과 실험적인 기능이기 때문에 브라우저 호환성을 잘 따져봐야한다."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "async"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " fetchUserData"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "userId"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\tconst"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " controller"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " AbortController"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\tconst"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " signal"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " controller.signal;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\ttry"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t  const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " response"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`https://api.example.com/users/${"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "userId"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",{signal});"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t  const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " data"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " response."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t  console."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"Fetched Data:\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", data);"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " data;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t} "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(error){"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\tif"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(error.name "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!=="
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"AbortError\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "){"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t\t\tcontroller."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "abort"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t\t}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "React - fetch"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { useState, useEffect } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"react\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " UserProfile"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "userId"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "user"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setUser"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "    fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`https://api.example.com/users/${"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "userId"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      ."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "res"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " res."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "())"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      ."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "        setUser"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(data);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      });"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, [userId]);"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // userId가 변경될 때마다 새로운 요청 실행"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // 여러 명의 사용자 프로필을 조회할 때 발생할 수 있음."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // 첫 번째 요청이 오래 걸리면, 이전 사용자 정보가 UI에 덮어씌워짐."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">{user ? user.name : "
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"Loading...\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "React useEffect를 사용한다면 어떨까? AbortController를 사용해도 괜찮지만, AbortController를 사용하지 못하는 상황도 있을 수 있다. 여기서는 useRef를 사용해서 최신 상태만 값을 저장하도록 해보자. 혹은 클린업 함수를 이용하여 이전 상태를 초기화 하는 방법을 선택할 수도 있다."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { useState, useEffect } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"react\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " UserProfile"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "userId"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "user"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setUser"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " requestIdRef"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useRef"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// useRef를 이용하여 최신 상태만 반영한다."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t  const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " requestId"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ++"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "requestIdRef.current; "
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\t  setUser"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t  "
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "    fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`https://api.example.com/users/${"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "userId"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      ."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "res"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " res."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "())"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      ."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t      if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(requestId "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " requestIdRef.current){"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\t\t      setUser"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(data);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t      }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      });"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      "
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ()"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " setUser"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 클린업 함수를 이용할 수도 있다."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, [userId]);"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">{user ? user.name : "
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"Loading...\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " isCancelled "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " false"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " fetchData"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " res"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'https://api.example.com/data'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " json"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " res."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "isCancelled) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "      setData"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(json);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  };"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  fetchData"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    isCancelled "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " true"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  };"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}, [query]);"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "혹은 isCancelled 변수를 사용하여 간단하게 Race Condition을 방지할 수도 있다. AbortController를 사용할 수 없거나 부담스러울 때 쓸 수 있다."
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "React - setTimeout"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { useState, useEffect } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"react\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " TimerComponent"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " timer"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " setTimeout"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "      setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(count "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    }, "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1000"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " clearTimeout"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(timer);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, [count]);"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // setTimeout 실행 도중 count가 변경되면, 예상하지 못한 결과를 얻을 수 있음."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // setTimeout 실행 후, 사용자가 버튼을 클릭하면,"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // setTimeout이 실행될 때 참조한 count로 계산하여 결과값에 혼란이 올 수 있음."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t  <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t\t  <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "Count"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}</"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\t  <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "+1)}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">+"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\t  <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "-1)}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">-"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\t</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  );"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "이런 경우는 간단하다. useState를 사용해봤다면, 손쉽게 해결할 수 있는 문제인데, count 참조 대신 최신 상태를 참조하면 된다. 혹은 리렌더링이 발생하지 않는 useRef를 사용할 수도 있다."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { useState, useEffect } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"react\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " TimerComponent"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " timer"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " setTimeout"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "      setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "prev"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " prev"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "); "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// set 함수에서 최신 상태를 참조"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    }, "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1000"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " clearTimeout"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(timer);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, [count]);"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t  <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t\t  <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "Count"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}</"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\t  <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "prev"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " prev"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">+"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\t  <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "button onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "prev"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " prev"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">-"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\t</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  );"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Next.js - getServerSideProps"
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " getServerSideProps"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "context"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "userId"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " context.query;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " res"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`https://api.example.com/users/${"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "userId"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " user"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " res."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    props: { user },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  };"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// getServerSideProps는 요청이 들어올 때마다 데이터를 가져옴."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 여러 명의 사용자가 페이지에 방문해 요청할 시, 데이터가 뒤섞여 보여질 수 있음."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " UserProfile"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "({ user }) "
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">{user ? user.name : "
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"Loading...\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "Next.js에서 Race Condition을 방지하는 방법은 대략 3가지 정도가 있다."
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Next.js의 revalidate를 사용하여 정적 페이지를 자동으로 갱신하는 것."
      }), "\n", _jsx(_components.li, {
        children: "클라이언트 측에서 AbortController를 사용하여 이전 요청이 완료되지 않았을 경우, 기존 요청을 취소하는 것."
      }), "\n", _jsx(_components.li, {
        children: "Redis, useSWR, Tanstack Query 같은 외부 라이브러리를 사용하는 것."
      }), "\n"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"react\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " getServerSideProps"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "context"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "userId"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " context.query;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  try"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " res"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`https://api.example.com/users/${"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "userId"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "    // 실패 응답 처리"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "res.ok) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { notFound: "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " };"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " user"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " res."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      props: { user },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    };"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (error) {"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "    // 네트워크 오류 등 처리"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      props: { error: "
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"사용자 정보를 불러올 수 없습니다.\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " },"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    };"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " UserProfile"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "({ user, error }) "
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (error) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">{error}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">{user ? user.name : "
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"Loading...\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.h2, {
      id: "비동기-로직의-패턴화",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#비동기-로직의-패턴화",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "비동기 로직의 패턴화"]
    }), "\n", _jsx(_components.p, {
      children: "앞에서는 클린업 함수를 통해 Race Condition을 막았다. 이걸 비동기 로직에서 어떻게 사용할 수 있을지 알아보자."
    }), "\n", _jsxs(_components.h3, {
      id: "커스텀-훅",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#커스텀-훅",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "커스텀 훅"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " useAsync"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<T> "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "fn"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " :"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ()"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Promise"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">, "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "deps"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "any"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[]) "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\tconst"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "loading"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setLoading"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ] "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\tconst"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setData"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ] "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\tconst"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setError"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ] "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useState"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\tuseEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(()"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\tlet"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ignore "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " false"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\t\tsetLoading"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\t\tsetData"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\t\tsetError"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t\t"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\ttry"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\t\tconst"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " data"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " fn"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\t\tif"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "ignore) "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setData"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(data)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t\t}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(error){"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t\t\tif"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "ignore) "
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setError"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(error)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t\t}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "finally"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "\t\t\tsetLoading"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "false"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t\t}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t\t"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\treturn"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ignore "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " true"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t}, deps)"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "\t"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\treturn"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {loading, data, error}"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " fetchUser"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"https://api.example.com/user\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "res"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " res."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "());"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Profile"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "loading"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useAsync"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(fetchUser, []);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (loading) "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">로딩중"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "...</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (error) "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">에러 발생"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "data) "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">{data.name}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "suspense",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#suspense",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Suspense"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " suspensify"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "promise"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Promise"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " status "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"pending\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " result"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " T"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  let"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " suspender "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " promise."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    ("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "r"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      status "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"success\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      result "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " r;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    },"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    ("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      status "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"error\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      result "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " e;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  );"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "    read"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (status "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"pending\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "throw"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " suspender;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      if"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (status "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " \"error\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "throw"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " result;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " result;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  };"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " resource"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " suspensify"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"https://api.example.com/user\""
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "res"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " res."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()));"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " UserProfile"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " user"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " resource."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "read"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(); "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 에러 또는 pending이면 throw됨"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">{user.name}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " App"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t  <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "ErrorBoundary fallback"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{<Error />}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t    <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "Suspense fallback"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{<p>로딩 중"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "...</"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t      <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "UserProfile "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "/>"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t    </"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "Suspense"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\t  </"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "ErrorBoundary"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  );"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "데이터가 오지 않았다면, Promise를 던지기 때문에 해당 컴포넌트는 렌더링을 중단하고, 로딩 화면을 보여준다. 데이터가 전달되어 Promise가 resolve되면, UserProfile 컴포넌트를 다시 시도하여 렌더링한다."
    }), "\n", _jsx(_components.p, {
      children: "반대로, read()가 error를 던지면, ErrorBoundary에서 캐치하여 에러 컴포넌트를 렌더링한다. 나머지 컴포넌트는 렌더링하지 않는다."
    }), "\n", _jsxs(_components.h1, {
      id: "참고-자료",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#참고-자료",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "참고 자료"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://react.dev/reference/react/useEffect?utm_source=chatgpt.com#my-effect-keeps-re-running-in-an-infinite-cycle",
        children: "https://react.dev/reference/react/useEffect?utm_source=chatgpt.com#my-effect-keeps-re-running-in-an-infinite-cycle"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://ko.react.dev/learn/lifecycle-of-reactive-effects",
        children: "https://ko.react.dev/learn/lifecycle-of-reactive-effects"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://rinae.dev/posts/a-complete-guide-to-useeffect-ko/?utm_source=chatgpt.com",
        children: "https://rinae.dev/posts/a-complete-guide-to-useeffect-ko/?utm_source=chatgpt.com"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/",
        children: "https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://www.newline.co/@RichardBray/race-conditions-in-react-what-they-are-and-how-to-avoid-them--675702e6",
        children: "https://www.newline.co/@RichardBray/race-conditions-in-react-what-they-are-and-how-to-avoid-them--675702e6"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race",
        children: "https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect",
        children: "https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://react.dev/reference/react/useEffect#fetching-data-with-effects",
        children: "https://react.dev/reference/react/useEffect#fetching-data-with-effects"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
return {
  default: MDXContent
};
