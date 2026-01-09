"use strict";
const {Fragment: _Fragment, jsx: _jsx, jsxs: _jsxs} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    del: "del",
    em: "em",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.h1, {
      id: "리액트의-동시성이란",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#리액트의-동시성이란",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "리액트의 동시성이란?"]
    }), "\n", _jsx(_components.p, {
      children: "쉽게 말해, 한 번에 여러 작업을 진행할 수 있다. 그러나 동시에 여러 작업을 진행하는 것은 아니다. 우선 순위에 따라 현재 진행하던 작업을 중단하고, 시급한 작업을 진행한 후, 이전 작업을 재개할 지 혹은 아예 이전 작업을 중단할 지 선택할 수 있다. 여기서 핵심 기능은 렌더링을 중단할 수 있다는 것에 있다."
    }), "\n", _jsx(_components.p, {
      children: "그러나 리액트를 사용하면서, 모든 사용자가 동시성을 경험하는 것은 아니다. 현재로서는 옵셔널한 선택이며, 기본적으로 동기 렌더링을 사용한다. 따라서 사용자가 화면에서 결과를 볼 수 있을 때까지 무엇도 렌더링을 중단시킬 수 없다. ⇒ 화면이 렌더링 되기 전까지는 사용자 입력 또한 중단된다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "💡 그렇다면, 궁금해진다. 왜 동시 모드, 동시 기능 등 동시성에 대한 것을 넣도록 했을까? 리액트가 UI 라이브러리이긴 하지만, 그러한 선택을 하게 된 배경이 궁금해졌다."
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "왜-동시성을-넣었을까",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#왜-동시성을-넣었을까",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "왜 동시성을 넣었을까?"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.em, {
        children: "대체적으로 그렇게 설명한다. 무겁고, 당장 시급하지 않은 계산을 뒤로 미루고, 우선적인 사용자 입력을 진행하여 렌더링한다. 그리고 사용자 입력이 종료되어 시급한 작업이 사라지면, 이후의 작업을 진행하여 렌더링한다. ="
      }), " ", _jsx("u", {
        children: _jsx(_components.em, {
          children: _jsx(_components.strong, {
            children: "사용자 입력 막지 말자!"
          })
        })
      })]
    }), "\n", _jsx(_components.p, {
      children: "위의 개선은 사용자 경험을 더 좋게 만든다. 그렇지만, 표면적인 내용이라고 느껴졌다. 나는 리액트가 동시성을 지원하게 된 핵심적인 이유가 궁금했고, 검색 끝에 다음과 같은 이유를 알 수 있었다."
    }), "\n", _jsxs(_components.h3, {
      id: "메인-스레드-블로킹-문제",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#메인-스레드-블로킹-문제",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "메인 스레드 블로킹 문제"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["✔️ ", _jsx(_components.strong, {
          children: "• React can delay the reconciliation."
        }), " If React takes control over calling our components, it can do many interesting things. For example, ", _jsx("u", {
          children: _jsx(_components.em, {
            children: _jsx(_components.strong, {
              children: "it can let the browser do some work between the component calls so that re-rendering a large component tree doesn’t block the main thread."
            })
          })
        }), "  Orchestrating this manually without reimplementing a large part of React is difficult.", _jsx(_components.br, {}), "\n", "→ ", _jsx(_components.a, {
          href: "https://overreacted.io/react-as-a-ui-runtime/#inversion-of-control",
          children: "https://overreacted.io/react-as-a-ui-runtime/#inversion-of-control"
        })]
      }), "\n"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["✔️ In React 16, rendering was always synchronous. This means that once React started rendering a component tree, it wouldn't stop until the entire tree was rendered. This could lead to problems if a large rendering task was blocking the main thread, causing the UI to freeze and become unresponsive.", _jsx(_components.br, {}), "\n", "→ ", _jsx(_components.a, {
          href: "https://www.dhiwise.com/post/deep-dive-into-react-concurrent-mode-exploring-key-features-and-use-cases",
          children: "https://www.dhiwise.com/post/deep-dive-into-react-concurrent-mode-exploring-key-features-and-use-cases"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "단순히 사용자 입력을 막지 말자가 아니라 큰 컴포넌트 트리를 렌더링할 때, 메인 스레드가 블로킹되어 브라우저가 다른 작업(사용자 입력 처리, 레이아웃, 스타일)을 처리할 수 없게 되는 문제를 해결하기 위해 동시성을 제안한 것이다."
    }), "\n", _jsxs(_components.h3, {
      id: "기존-동기-렌더링의-한계",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#기존-동기-렌더링의-한계",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "기존 동기 렌더링의 한계"]
    }), "\n", _jsx(_components.p, {
      children: "동시성 기능을 넣게 된다면, 다음과 같은 문제가 발생한다. 렌더링 도중 급한 작업(사용자 입력 등)이 들어오면, 렌더링 작업이 중단되고 사용자 입력을 우선시하게 된다. 여기서 렌더링 중단 시 반쯤 업데이트 된 UI가 사용자에게 노출되고, 사용자 입력이 지속될 수록 화면이 깜박거리게 된다."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["✔️ Even if we want to split the reconciliation process itself into ", _jsx(_components.a, {
          href: "https://www.youtube.com/watch?v=mDdgfyRB5kg",
          children: "non-blocking"
        }), " chunks of work, we should still perform the actual host tree operations in a single synchronous swoop. ", _jsx("u", {
          children: _jsx(_components.em, {
            children: _jsx(_components.strong, {
              children: "This way we can ensure that the user doesn’t see a half-updated UI, and that the browser doesn’t perform unnecessary layout and style recalculation for intermediate states that the user shouldn’t see."
            })
          })
        }), _jsx(_components.br, {}), "\n", "→ ", _jsx(_components.a, {
          href: "https://overreacted.io/react-as-a-ui-runtime/#consistency",
          children: "https://overreacted.io/react-as-a-ui-runtime/#consistency"
        })]
      }), "\n"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["✔️ This is why React splits all work into the “render phase” and the “commit phase”. ", _jsx(_components.em, {
          children: "Render phase"
        }), " is when React calls your components and performs reconciliation. It is safe to interrupt and ", _jsx(_components.a, {
          href: "https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html",
          children: "in the future"
        }), " will be asynchronous. ", _jsx(_components.em, {
          children: "Commit phase"
        }), " is when React touches the host tree. It is always synchronous.", _jsx(_components.br, {}), "\n", "→ ", _jsx(_components.a, {
          href: "https://overreacted.io/react-as-a-ui-runtime/#consistency",
          children: "https://overreacted.io/react-as-a-ui-runtime/#consistency"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "그렇기 때문에, Render Phase와 Commit Phase를 구분지어, 계산은 중단 가능하지만, 실제 화면 반영은 동기적으로 진행하여 사용자에게는 완전한 UI를 노출할 수 있는 전략을 택한 것이다."
    }), "\n", _jsxs(_components.h3, {
      id: "동시성의-문제점과-해결책-요약-정리",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#동시성의-문제점과-해결책-요약-정리",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "동시성의 문제점과 해결책: 요약 정리"]
    }), "\n", _jsx(_components.p, {
      children: "1️⃣ 문제 상황: 큰 렌더링 작업이 메인 스레드를 독점함 → 사용자 입력 무반응"
    }), "\n", _jsx(_components.p, {
      children: "2️⃣ 해결책: 렌더링을 중단시킬 수 있게 동시성을 주입하자 → 사용자 입력 반응"
    }), "\n", _jsx(_components.p, {
      children: "3️⃣ 2차 문제 상황: 렌더링이 도중에 중단되어 반쯤 렌더링된 UI가 노출됨 → 사용자 입력 시마다 화면이 깜박거림"
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "🗣 사용자 입력 → 렌더링 중단 → 화면 절반 업데이트 → 다시 렌더링 시작 → 또 사용자 입력 → 또 렌더링 중단 → 또 반복… (화면 깜박거림)"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "4️⃣ 2차 해결책: 계산은 중단 가능하지만(Render Phase), 실제 화면 반영은 한 번에 실행(Commit Phase)"
    }), "\n", _jsxs(_components.h3, {
      id: "render-phase-vs-commit-phase",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#render-phase-vs-commit-phase",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Render Phase vs Commit Phase"]
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
              children: "// React 16"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  ReactDOM."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "render"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(<"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "App"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " />, document."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "getElementById"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'root'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "));"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    "
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // React 18"
            })
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
              children: " root"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ReactDOM."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "createRoot"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(document."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "getElementById"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'root'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "));"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  root."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "render"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(<"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "App"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " />);"
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
              children: "// https://www.dhiwise.com/post/deep-dive-into-react-concurrent-mode-exploring-key-features-and-use-cases"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["리액트 버전 16의 경우, 동기적 렌더링을 지원한다. 코드를 확인해보면, 전체 트리를 렌더하는 게 보인다. 그에 반해 리액트 버전 18은 ", _jsx(_components.code, {
        children: "createRoot"
      }), " 를 통해 루트 노드를 만드는 코드와 렌더하는 코드가 별도로 구분되어 있는 것을 볼 수 있다. 앞서 말한 ", _jsx(_components.em, {
        children: "Commit Phase,"
      }), " _Render Phase_를 구분지어 동시성 기능을 활성화하기 위한 역할 분리인 것 같다."]
    }), "\n", _jsxs(_components.h2, {
      id: "리액트-18-버전의-주요-변화",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#리액트-18-버전의-주요-변화",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "리액트 18 버전의 주요 변화"]
    }), "\n", _jsxs(_components.h3, {
      id: "리액트-버전-18의-자동-배치",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#리액트-버전-18의-자동-배치",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "리액트 버전 18의 자동 배치"]
    }), "\n", _jsx(_components.p, {
      children: "리액트 버전 16(18 버전 이전)에서는 이벤트 외부에서 트리거된 state 업데이트들이 함께 배치되지 않고, 불필요한 리렌더링을 야기했다. 오직, 리액트 이벤트 내부의 업데이트만 배칭했고, promise, setTimeout, 네이티브 이벤트 핸들러 등의 외부에서 일어난 이벤트 트리거는 배칭하지 않았다. 그러나 리액트 버전 18에서는 자동 배치를 통해 불필요한 리렌더링을 제거했다."
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
              children: "// Before: only React events were batched."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setTimeout"
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
              children: "  setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "c"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " c "
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
                color: "#DCBDFB"
              },
              children: "  setFlag"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "f"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " !"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "f);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // React will render twice, once for each state update (no batching)"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}, "
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// After: updates inside of timeouts, promises,"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// native event handlers or any other event are batched."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setTimeout"
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
              children: "  setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "c"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " c "
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
                color: "#DCBDFB"
              },
              children: "  setFlag"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "f"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " !"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "f);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // React will only re-render once at the end (that's batching!)"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}, "
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "//https://react.dev/blog/2022/03/29/react-v18#new-feature-automatic-batching"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "자동-배치를-통한-성능-최적화",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#자동-배치를-통한-성능-최적화",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "자동 배치를 통한 성능 최적화"]
    }), "\n", _jsx(_components.p, {
      children: "리액트 배칭이란 상태 업데이트와 밀접한 관련이 있다. useState를 공부해보았다면, 자연스럽게 리액트 배칭에 대해서도 접근하게 되는데, 리액트의 상태 값을 처리하는 작업을 말한다. 리액트에서 setState()를 호출하면, 리렌더링이 발생한다. 이는 업데이트 된 상태값을 화면에 출력하기 때문이다. (리렌더링이 없으면, 상태값이 변경되어도 출력이 안됨)"
    }), "\n", _jsx(_components.p, {
      children: "리액트 18버전이 나오기 전까지, 리액트에서는 외부에서 트리거된 state 업데이트들은 배치되지 않았었다. 타이머, 프로미스, 네이티브 이벤트 등이 해당되었는데, 만약 컴포넌트 내부에서 리액트 이벤트와 타이머, 프로미스, 네이티브 이벤트가 한번에 업데이트 된다고 가정해보자."
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
              children: "// Before: 리액트 이벤트만 배칭됨."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setTimeout"
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
              children: "  setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "c"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " c "
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
                color: "#DCBDFB"
              },
              children: "  setFlag"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "f"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " !"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "f);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// React는 각 상태 업데이트마다 한 번씩 두 번 렌더링합니다(배칭 없음)"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}, "
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// After: setTimeout, Promise "
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// native event handlers or any other event 는 전부 배칭됨"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setTimeout"
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
              children: "  setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "c"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " c "
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
                color: "#DCBDFB"
              },
              children: "  setFlag"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "f"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " !"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "f);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  //  React는 마지막에 한 번만 다시 렌더링합니다(배칭!)"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}, "
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
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "굉장히 많은 렌더링이 일어나게 된다. 알다시피 리액트에서 렌더링이 일어나면, 변경된 부분만 바뀌는 것은 사실이지만, 부모 컴포넌트와 종속되어 있는 하위 컴포넌트까지 리렌더링이 발생한다. 예측만 해봐도, 성능면에서 현저히 떨어진다는 사실을 알 수 있다. ⇒ 함수 재생성, 객체 재생성, useEffect 호출로 인한 메모리 낭비"
    }), "\n", _jsxs(_components.h3, {
      id: "리액트의-조정과-적용의-악순환",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#리액트의-조정과-적용의-악순환",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), _jsx(_components.strong, {
        children: "리액트의 조정과 적용의 악순환"
      })]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "yaml",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "yaml",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "첫 번째 업데이트 사이클"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "1. setCount1(count1 + 1) 호출"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "2. Parent 리렌더링"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "3. Child1, Child2, Child3 모두 리렌더링"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "4. DOM diff 계산 후 필요한 부분만 DOM 업데이트"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " "
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "두 번째 업데이트 사이클"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "1. setCount2(count2 + 1) 호출"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  "
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "2. Parent 리렌더링 (또!)"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "3. Child1, Child2, Child3 모두 리렌더링 (또!)"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "4. DOM diff 계산 후 필요한 부분만 DOM 업데이트"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["리액트에는 _", _jsx(_components.strong, {
        children: "조정"
      }), "_과 _", _jsx(_components.strong, {
        children: "적용"
      }), "_이라는 단계를 걸쳐 화면을 출력한다. 우선, 상태가 업데이트 되면, 변경된 상태값을 통해 조정을 들어가게 된다. 가상 돔을 만드는 것인데, 업데이트된 최신 상태값의 가상 돔을 가지고 이전 가상 돔과 비교하게 된다. 비교가 끝나고 최종 형태의 가상 돔이 완성되면, 실제 DOM에 적용하게 된다. 이 과정까지 완료된 후에야 사용자는 변화된 화면을 볼 수 있다."]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabIndex: "0",
        "data-language": "yaml",
        "data-theme": "github-dark-dimmed",
        children: _jsxs(_components.code, {
          "data-language": "yaml",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "// React가 매번 해야 하는 일들"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "1. 새로운 Virtual DOM 트리 생성 < 조정 단계"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "2. 이전 트리와 비교 (diffing)"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "3. 변경사항 계산"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "4. 실제 DOM 업데이트 결정 < 적용 단계"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "// React 16"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "자동 배치가 없어 위의 과정을 2번 실행함"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "// React 18"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "자동 배치를 통해 위의 과정을 총 1번 실행함."
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "✔️ 1. 전체 컴포넌트 트리 리렌더링 (부모가 리렌더링되면 하위 컴포넌트들은 무조건 리렌더링)"
      }), "\n", _jsxs(_components.ol, {
        start: "2",
        children: ["\n", _jsxs(_components.li, {
          children: ["\n", _jsx(_components.p, {
            children: "함수/객체 재생성 비용"
          }), "\n"]
        }), "\n", _jsxs(_components.li, {
          children: ["\n", _jsx(_components.p, {
            children: "useEffect의 중복 실행 (상태값이 변경될 때마다 리렌더링되어 호출됨)"
          }), "\n"]
        }), "\n"]
      }), "\n", _jsx(_components.p, {
        children: "⇒ 전체적인 성능 감소로 이어지게 됨."
      }), "\n"]
    }), "\n", _jsxs(_components.h3, {
      id: "불필요한-재렌더링을-줄이는-방법",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#불필요한-재렌더링을-줄이는-방법",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), _jsx(_components.strong, {
        children: "불필요한 재렌더링을 줄이는 방법"
      })]
    }), "\n", _jsx(_components.p, {
      children: "따라서 리액트는 성능 최적화를 할 필요가 있었다. 어떤 스코프든 상관없이 같은 이벤트 루프 틱 내의 모든 setState를 배치하도록 했다."
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
              children: "// 리액트 버전 18"
            })
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
              children: " example"
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
                color: "#DCBDFB"
              },
              children: "  setCount1"
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
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 틱 1"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  setCount2"
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
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 틱 1"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  "
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  setTimeout"
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
              children: "    setCount3"
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
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 틱 2"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "    setCount4"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 틱 2"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    "
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "    Promise"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "resolve"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "then"
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
              children: "      setCount5"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 틱 3"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "      setCount6"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "6"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 틱 3"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    });"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, "
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
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  "
            })
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
              children: "'/api'"
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
              children: "    setCount7"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "7"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 틱 4"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "    setCount8"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "8"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 틱 4"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  });"
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 리액트 18버전: 총 4번의 리렌더링"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 틱 1: count1, count2"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 틱 2: count3, count4"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 틱 3: count5, count6  "
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 틱 4: count7, count8"
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
              children: "// 리액트 버전 16"
            })
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
              children: " example"
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
                color: "#DCBDFB"
              },
              children: "  setCount1"
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
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 배치됨"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  setCount2"
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
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 배치됨 -> 1번째 렌더링"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  "
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  setTimeout"
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
              children: "    setCount3"
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
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 즉시 렌더링 → 2번째 렌더링"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "    setCount4"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 즉시 렌더링 → 3번째 렌더링"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    "
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "    Promise"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "resolve"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "then"
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
              children: "      setCount5"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 즉시 렌더링 → 4번째 렌더링"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "      setCount6"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "6"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 즉시 렌더링 → 5번째 렌더링"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    });"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }, "
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
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  "
            })
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
              children: "'/api'"
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
              children: "    setCount7"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "7"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 즉시 렌더링 → 6번째 렌더링"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "    setCount8"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "8"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");  "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 즉시 렌더링 → 7번째 렌더링"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  });"
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 리액트 16버전: 총 7번의 리렌더링"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 틱 1: count1, count2"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 이후의 틱(2~7): 즉시 렌더링하게 됨"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "7번의 렌더링이 성능 개선을 통해 4번으로 줄어들었다. 약 43%의 성능이 개선된 것이다."
    }), "\n", _jsxs(_components.h3, {
      id: "리액트의-버전별-배치-기능-체험해보기",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#리액트의-버전별-배치-기능-체험해보기",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "리액트의 버전별 배치 기능 체험해보기"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "리액트 17 버전의 자동 배치 데모"
      }), "\n", _jsx(_components.p, {
        children: _jsx(_components.a, {
          href: "https://codesandbox.io/p/sandbox/trusting-khayyam-cn5ct",
          children: "https://codesandbox.io/p/sandbox/trusting-khayyam-cn5ct"
        })
      }), "\n", _jsx(_components.p, {
        children: "리액트 18 버전의 자동 배치 데모"
      }), "\n", _jsx(_components.p, {
        children: _jsx(_components.a, {
          href: "https://codesandbox.io/p/sandbox/morning-sun-lgz88",
          children: "https://codesandbox.io/p/sandbox/morning-sun-lgz88"
        })
      }), "\n"]
    }), "\n", _jsxs(_components.h1, {
      id: "동시성-관련-hooks",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#동시성-관련-hooks",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "동시성 관련 Hooks"]
    }), "\n", _jsxs(_components.h3, {
      id: "usetransition",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#usetransition",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), _jsx(_components.strong, {
        children: "useTransition"
      })]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://ko.react.dev/reference/react/useTransition",
        children: "https://ko.react.dev/reference/react/useTransition"
      })
    }), "\n", _jsx(_components.p, {
      children: "action으로 non-blocking 업데이트를 수행하는 훅이다. 쉽게 말하면, 사용자 입력을 통해 상태를 업데이트해도 화면이 중단되지 않는다는 것이다. 사용자 입력을 우선으로 처리하고, 입력값을 이용한 결과 리스트 출력 같은, 우선 순위가 낮은 작업은 사용자 입력이 끝난 뒤 수행한다."
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
              children: " SubmitButton"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "submitAction"
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
              children: "isPending"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "startTransition"
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
              children: " useTransition"
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
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "button"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      disabled"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{isPending}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{() => {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "        startTransition"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "async"
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
              children: " { "
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "        // 전달하는 함수는 동기식이어야 함."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "        // startTransition에 전달하는 함수는 즉시 호출됨."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "        // 진행 중인 Transition이 여러 개 있는 경우, 함께 일괄 처리함."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "        // 순서를 보장하지 않기 때문에 빠른, 여러 번의 업데이트는 오류가 일어날 수 있음."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "          await"
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " submitAction"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        });"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      }}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    >"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "      Submit"
            })
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
              children: "button"
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
    }), "\n", _jsxs(_components.h3, {
      id: "usedeferredvalue",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#usedeferredvalue",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), _jsx(_components.strong, {
        children: "useDeferredValue"
      })]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://ko.react.dev/reference/react/useDeferredValue",
        children: "https://ko.react.dev/reference/react/useDeferredValue"
      })
    }), "\n", _jsx(_components.p, {
      children: "useTransition과 유사하게 우선순위를 두고 업데이트를 한다. 그러나 값을 지연시킨다는 차이점이 있다. 즉, 일부 UI를 지연시킬 수 있는 것인데, 초기 렌더링에서는 사용자가 제공한 값과 지연된 값이 일치한다. 업데이트가 발생하면, 지연된 값은 최신 값보다 뒤쳐지게 되며, 이를 우선적으로 렌더링한다. 그리고 백그라운드에서 새로 받은 값을 통해 리렌더링을 시도한다."
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
              children: " { useState, useDeferredValue } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'react'"
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
              children: " SearchPage"
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
              children: "query"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setQuery"
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
                color: "#96D0FF"
              },
              children: "''"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // 값을 지연시킨다."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "\t// 네트워크를 지연시키는 것이 아니라 값만 지연시킨다."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "\t// 컴포넌트 내부에서 생성된 객체는 리렌더링을 유발하므로 사용해서는 안된다. (같은 값을 받아야 함)"
            })
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
              children: " deferredQuery"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useDeferredValue"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(query);   "
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // ..."
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
    }), "\n", _jsxs(_components.h3, {
      id: "그렇다면-usetransition-usedeferredvalue-언제-사용해야-할까",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#그렇다면-usetransition-usedeferredvalue-언제-사용해야-할까",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "그렇다면, ", _jsx(_components.strong, {
        children: "useTransition, useDeferredValue 언제 사용해야 할까?"
      })]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["✔️ ", _jsx(_components.strong, {
          children: "useTransition"
        }), "은 여러 상태를 한 번에 업데이트 하고 싶을 때 사용하면 좋다."]
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
                children: " handleTabChange"
              }), _jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "newTab"
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
                children: " {  "
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  setActiveTab"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(newTab); "
              }), _jsx(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "// 즉시 업데이트  "
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    "
              })
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  startTransition"
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
                children: " {  "
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "    setTabContent"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "loadTabContent"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(newTab)); "
              }), _jsx(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "// 지연  "
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "    setTabData"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "loadTabData"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(newTab));       "
              }), _jsx(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "// 지연  "
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "    setTabSettings"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "loadSettings"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(newTab));  "
              }), _jsx(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "// 지연  "
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  });  "
              })
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "};  "
              })
            })]
          })
        })
      }), "\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "useDeferredValue"
        }), "은 하나 값으로 여러 곳에서 사용할 때, 그 중 일부만 지연시키는 상황에서 사용하면 좋다."]
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
                children: " App"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "() {  "
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
                children: "searchTerm"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "setSearchTerm"
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
                  color: "#96D0FF"
                },
                children: "''"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ");  "
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
                children: " deferredSearchTerm"
              }), _jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " useDeferredValue"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(searchTerm);  "
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    "
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
                children: " (  "
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "    <>"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  "
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "      {"
              }), _jsx(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "/* 사용자 입력: 즉시 반응함 */"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "}  "
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
                children: "input value"
              }), _jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "{searchTerm} onChange"
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
                  color: "#F47067"
                },
                children: "..."
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "} "
              }), _jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "/>"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  "
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
                children: "div"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ">"
              }), _jsx(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "검색어"
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
                children: "searchTerm"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "}</"
              }), _jsx(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "div"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ">  "
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "        "
              })
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "      {"
              }), _jsx(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "/* 결과값: 지연되어도 괜찮음 */"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "}  "
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
                children: "ExpensiveSearchResults query"
              }), _jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "{deferredSearchTerm} "
              }), _jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "/>"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  "
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "    </>"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  "
              })]
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  );  "
              })
            }), "\n", _jsx(_components.span, {
              "data-line": "",
              children: _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "}  "
              })
            })]
          })
        })
      }), "\n"]
    }), "\n", _jsxs(_components.h3, {
      id: "usesyncexternalstore",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#usesyncexternalstore",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "useSyncExternalStore"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://ko.react.dev/reference/react/useSyncExternalStore",
        children: "https://ko.react.dev/reference/react/useSyncExternalStore"
      })
    }), "\n", _jsx(_components.p, {
      children: "외부의 store를 구독할 수 있는 리액트 훅이다. 이런 기능이 필요한 이유는 동시성의 안정성 때문이다. 리액트의 동시성은 non-blocking으로 돌아가는데, 외부 스토어와 리액트의 렌더링 흐름의 일관성을 보장할 수 있다. 또한, 외부 스토어의 상태값과 리액트의 상태값이 맞지 않다면, non-blocking을 중단하고 blocking을 수행한다."
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
              children: " { useSyncExternalStore } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'react'"
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { todosStore } "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " './todoStore.js'"
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
              children: " TodosApp"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() {"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// subscribe 함수는 구독하고 구독을 취소하는 함수를 반환해야 함."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// getSnapshot 함수는 store의 데이터 스냅샷을 읽어야 함"
            })
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
              children: " todos"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useSyncExternalStore"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(todosStore.subscribe, todosStore.getSnapshot);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // store가 변경되지 않은 상태에서 getSnapshot는 동일한 값을 반환해야 함."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // 저장소가 변경되어 값이 다르면, 리액트는 컴포넌트를 리렌더링함 => blocking 업데이트를 적용함"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // subscribe 함수는 컴포넌트 외부에서 선언하여 사용해야 함. 그렇지 않으면 렌더링마다 새롭게 구독하게 됨."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  "
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // ..."
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 간단한 사용 예시"
            })
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
              children: " useWindowWidth"
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
                color: "#DCBDFB"
              },
              children: " useSyncExternalStore"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "    // subscribe"
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
              children: "callback"
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
              children: "      window."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "addEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'resize'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", callback);"
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
              children: " window."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "removeEventListener"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'resize'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", callback);"
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
                color: "#768390"
              },
              children: "    // getSnapshot  "
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    () "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " window.innerWidth"
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
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["✔️ 리액트는 DOM에 변경 사항을 적용하기 직전에 getSnapshot을 한 번 더 호출한다. 이때 처음과 다른 값을 반환하면, 리액트는 처음부터 다시 업데이트를 시작하고 blocking 업데이트를 적용하여 모든 컴포넌트가 같은 스토어 버전을 반영할 수 있도록 한다. 따라서, ", _jsx("u", {
          children: _jsx(_components.strong, {
            children: "useSyncExternalStore 훅의 핵심은 모든 컴포넌트가 외부 스토어의 동일한 상태값을 볼 수 있게 하여 리액트 렌더링의 흐름을 맞추는 것이다."
          })
        })]
      }), "\n"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "✔️ 리액트의 렌더링 흐름과 외부 스토어의 상태 변경이 같지 않으면, 다음과 같은 문제점이 발생할 수 있다."
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
                  color: "#6CB6FF"
                },
                children: "1."
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " React가 컴포넌트 렌더링 시작  "
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "2."
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " 외부 스토어 상태 "
              }), _jsx(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "변경"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " (다른 이벤트에 의해)  "
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "3."
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " React는 중간에 렌더링을 중단하고 다른 업데이트 처리  "
              })]
            }), "\n", _jsxs(_components.span, {
              "data-line": "",
              children: [_jsx(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "4."
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " 나중에 렌더링 재개 → 🚨 스토어 상태와 렌더링 상태 불일치"
              }), _jsx(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "!"
              }), _jsx(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  "
              })]
            })]
          })
        })
      }), "\n"]
    }), "\n", _jsxs(_components.h1, {
      id: "suspense와-strict-mode의-변화",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#suspense와-strict-mode의-변화",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Suspense와 Strict Mode의 변화"]
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
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// React 16~17: 오직 코드 스플리팅만 가능"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 데이터 페칭 불가능"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// SSR 지원 안됨"
            })
          }), "\n", _jsxs(_components.span, {
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
              children: " LazyComponent"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React."
            }), _jsx(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "lazy"
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
                color: "#F47067"
              },
              children: " import"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'./Component'"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "));"
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
              children: "    <"
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
              children: "{<div>Loading"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "...</"
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
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "LazyComponent "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "/>"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/* 컴포넌트를 지연로딩하는 것만 가능 */"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
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
              children: "Suspense"
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
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// React 18"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 각 컴포넌트가 독립적으로 로딩"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// UserProfile이 먼저 로드되면 바로 표시"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// UserPosts는 나중에 표시"
            })
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
              children: " ProfilePage"
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
                color: "#F47067"
              },
              children: "      <"
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
              children: "{<UserSkeleton />}"
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
              children: "        <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "UserProfile userId"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{userId} "
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
              children: "      </"
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
              children: "      <"
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
              children: "{<PostsSkeleton />}"
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
              children: "        <"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "UserPosts userId"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{userId} "
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
              children: "      </"
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
      children: "리액트 18버전부터는 부분 로딩이 가능하며, 동시에 로딩하여 완료되는 대로 표시할 수 있다. Transition과 결합하면 깜박임 없이, 이전 내용을 유지하며 새 내용으로 교체할 수 있다. SSR과 결합하여 사용할 수 있으므로, 더 빠른 초기 로딩을 기대할 수 있지만, 세밀하게 쪼개진 만큼 디버깅이나 에러 처리가 어려워졌다."
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
              children: "// 일반적인 방식"
            })
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
              children: " TraditionalApproach"
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
              children: "error"
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
              children: " useQuery"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "GET_USER"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  "
            })
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
              children: "Loading"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " />;"
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
              children: "Error"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " error"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "} />;"
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
              children: "UserProfile"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " data"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "={"
            }), _jsx(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "} />;"
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
              children: "// Suspense + Error Boundary 조합의 복잡성"
            })
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
              children: " SuspenseApproach"
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
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    <"
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
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/*여기서 에러가 캐치됨 1*/"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
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
              children: "{<Loading />}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/*에러 영역1*/"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "        <"
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
              children: "      </"
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
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/*에러 영역1*/"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
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
              children: "ErrorBoundary"
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
              children: "    <"
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
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/*여기서 에러가 캐치됨 2*/"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
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
              children: "{<Loading />}"
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/*에러 영역2*/"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "        <"
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
              children: "      </"
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
              children: "    </"
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
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/*에러 영역1*/"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  </"
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
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "따라서 간단한 CRUD 앱이거나 디버깅과 에러 처리가 복잡해지는 것을 원하지 않다면, 일반적인 방법을 사용하여 관리하는 것이 더 직관적이다."
    }), "\n", _jsxs(_components.h3, {
      id: "strict-mode-변화",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#strict-mode-변화",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Strict Mode 변화"]
    }), "\n", _jsxs(_components.p, {
      children: ["이전에는 ", _jsx(_components.strong, {
        children: "한 번만"
      }), " 마운트했었다."]
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
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React mounts the component. "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 컴포넌트 마운트"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  *"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Layout effects are created. "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// useLayoutEffect 실행"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  *"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Effects are created. "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// useEffect 실행"
            })]
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
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// React 18"
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
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React mounts the component. "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 컴포넌트 마운트"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  *"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Layout effects are created. "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// useLayoutEffect 실행"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  *"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Effects are created.        "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// useEffect 실행"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React simulates unmounting the component. "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 시뮬레이션 언마운트 (실제로 언마운트 되는 것은 아님)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  *"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Layout effects are destroyed. "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// useLayoutEffect 클린업 함수 실행"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  *"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Effects are destroyed.      "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// useEffect 클린업 함수 실행"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " React simulates mounting the component "
            }), _jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "with"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " the previous state. "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// 이전 상태로 컴포넌트를 마운트하는 것을 시뮬레이션"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  *"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Layout effects are created. "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// useLayoutEffect 실행"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  *"
            }), _jsx(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Effects are created "
            }), _jsx(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// useEffect 실행"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "이전 상태를 그대로 유지하며 Effect만 실행하게 된다. 사용자들이 클린업 함수를 제대로 구현했는지, 컴포넌트가 재마운트 되어도 올바르게 작동하는지 판단하고자 넣은 기능이다."
    }), "\n", _jsxs(_components.h1, {
      id: "끝으로",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#끝으로",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "끝으로"]
    }), "\n", _jsx(_components.p, {
      children: "리액트 18버전은 나온지 꽤 되었지만, 더 자세히 알아보고자 살펴보았다. 리액트에서 동시성을 왜 도입했는지, 도입 배경에 대해 알아보았고, 개인적으로는 납득했다. UI 라이브러리인 리액트가, 큰 작업으로 인해 메인 스레드가 블로킹되어 사용자 입력을 받을 수 없다면 큰 문제이기 때문이다. 꼭, 사용자 입력이 아니더라도 UI가 깜박이는 등의 문제는 치명적이라고 생각한다. 다만, 여전히 가지고 있는 문제점은 모든 상황에서 사용하기 적합한 기능은 아니라는 것이다. 규모가 작은 프로젝트 등 무턱대고 사용했다가 오히려, 성능이 떨어지거나 복잡해지는 등의 문제점이 보였다. 실제로 다른 개발자들도 증명하기 전까지는 사용하지 않는 것이 좋다라고도 한 걸로 보아, 기준점을 잘 잡고 옳은 판단 아래에서 사용해야 할 듯 싶다."
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.del, {
        children: "그렇지만 한 번 사용해보고 싶은 것도 사실이다…"
      })
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
    }), "\n", _jsxs(_components.h3, {
      id: "리액트-동시성",
      children: [_jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#리액트-동시성",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "리액트 동시성"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://react.dev/blog/2021/06/08/the-plan-for-react-18",
        children: "https://react.dev/blog/2021/06/08/the-plan-for-react-18"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://react.dev/blog/2022/03/29/react-v18",
        children: "https://react.dev/blog/2022/03/29/react-v18"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://overreacted.io/react-as-a-ui-runtime/",
        children: "https://overreacted.io/react-as-a-ui-runtime/"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://www.telerik.com/blogs/concurrent-rendering-react-18",
        children: "https://www.telerik.com/blogs/concurrent-rendering-react-18"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://dev.to/codesensei/the-ultimate-guide-to-react-conquering-concurrent-mode-and-suspense-3ahb",
        children: "https://dev.to/codesensei/the-ultimate-guide-to-react-conquering-concurrent-mode-and-suspense-3ahb"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://github.com/reactwg/react-18/discussions/64",
        children: "https://github.com/reactwg/react-18/discussions/64"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://www.dhiwise.com/post/deep-dive-into-react-concurrent-mode-exploring-key-features-and-use-cases",
        children: "https://www.dhiwise.com/post/deep-dive-into-react-concurrent-mode-exploring-key-features-and-use-cases"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://yozm.wishket.com/magazine/detail/2493/",
        children: "https://yozm.wishket.com/magazine/detail/2493/"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://rajeshdhiman.medium.com/react-18-automatic-batching-how-to-minimize-re-renders-and-boost-performance-5ff0c1544093",
        children: "https://rajeshdhiman.medium.com/react-18-automatic-batching-how-to-minimize-re-renders-and-boost-performance-5ff0c1544093"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://github.com/reactwg/react-18/discussions/21",
        children: "https://github.com/reactwg/react-18/discussions/21"
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
