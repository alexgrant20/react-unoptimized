import React, { useState, useEffect } from "react";
import { useDebounce, useThrottledCallback } from "use-debounce";
import axios from "axios";

const initalText = "Ind";

function getCountries(text, token) {
  return axios
    .get("https://restcountries.com/v3.1/name/" + text, {
      cancelToken: token,
    })
    .then(({ data }) => data.map(({ name }) => name.common));
}

export default function App() {
  const [text, setText] = useState(initalText);
  const [countries, setCountries] = useState([]);
  const [debouncedText] = useDebounce(text, 500);
  useEffect(() => {
    const source = axios.CancelToken.source();
    if (debouncedText) {
      getCountries(debouncedText, source.token)
        .then(setCountries)
        .catch((e) => {
          if (axios.isCancel(source)) {
            return;
          }
          setCountries([]);
        });
    } else {
      setCountries([]);
    }
    return () => {
      source.cancel(
        "Canceled because of component unmounted or debounce Text changed"
      );
    };
  }, [debouncedText]);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const renewToken = () => {
    console.log("Token renewed!");
    setIsButtonDisabled(true);

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 2000);
  };

  // Throttled function
  const throttled = useThrottledCallback(
    () => {
      if (!isButtonDisabled) {
        renewToken();
      }
    },
    2000,
    { trailing: false }
  );

  return (
    <>
      <div>
        <input
          defaultValue={initalText}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Actual value: {text}</p>
        <p>Debounced value: {debouncedText}</p>
        <p>Counties:</p>
        {countries && countries.length ? (
          <ul>
            {countries.map((country) => (
              <li>{country}</li>
            ))}
          </ul>
        ) : (
          <p>No Countries Found</p>
        )}
      </div>

      <div>
        <h1>Throttled Callback Example</h1>
        <button onClick={throttled} disabled={isButtonDisabled}>
          {isButtonDisabled ? "Wait for 5 minutes..." : "Click to Renew Token"}
        </button>
      </div>
    </>
  );
}
