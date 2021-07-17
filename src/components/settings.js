import { v4 as uuidv4 } from "uuid";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { addColumn, setColumns, toggleAutoRefresh } from "../redux/actions";
import { useSelector } from "react-redux";
import { refreshFeeds } from "../lib/munch";
import { isDarkMode, toggleDarkMode } from "../lib/darkmode";

export const AddColumn = () => (
  <div>
  <button onClick={() => addColumn({key: uuidv4()})}>Add Column</button>
  </div>
);

export const ShareLink = ({ hash }) => {
  const [ shareLink, setShareLink ] = useState();
  const toastLink = (link) => {
    navigator.clipboard.writeText(link);
    toast(`Link copied!\n${link}`, {
      autoClose: 4000,
      hideProgressBar: true,
      pauseOnHover: false,
      draggable: false,
    });
  };
  const columns = useSelector((state) => state.columnDefs);

  useEffect(() => {
    setShareLink(undefined);
  }, [columns]);

  return (
    <div>
    <button onClick={() => {
      if (shareLink) {
        toastLink(shareLink);
        return;
      }
      fetch('https://tiny.sibr.dev/submit', {
        method: 'POST',
        body: `url=https://feedeck.sibr.dev/#/${hash}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then((r) => {
        if (r.status !== 200) {
          throw new Error("oh no");
        }
        return r.text();
      })
      .then((tinyHash) => {
        const link = `${window.location.origin}/monch#${tinyHash}`;
        setShareLink(link);
        toastLink(link);
      })
      .catch(() => {
        setShareLink(undefined);
        toast("oh no something went wrong", {
          hideProgressBar: true,
          draggable: false
        });
      })
    }}>Share</button>
    </div>
  );
};

export const NewDeck = () => {
  return (
    <div>
    <button onClick={() => window.open(window.location.origin, '_blank')}>New Feed</button>
    </div>
  );
};

export const ResetDeck = () => {
  return (
    <div>
    <button onClick={() => setColumns([{key: uuidv4()}])}>Delete Feed</button>
    </div>
  );
};

export const DuplicateDeck = ({ hash }) => {
  return (
    <div>
    <button onClick={() => window.open(`${window.location.origin}/#/${hash}`, '_blank')}>
    Duplicate Feed
    </button>
    </div>
  );
};

export const RefreshFeed = () => {
  const lastUpdate = useSelector((state) => state.lastUpdate);
  const columns = useSelector((state) => state.columnDefs);
  const autoRefresh = useSelector((state) => state.autoRefresh);
  return (
    <div>
    {//<button onClick={() => toggleAutoRefresh()}>Autorefresh: {autoRefresh ? "ON" : "OFF"}</button>
    }
      <button onClick={() => refreshFeeds(lastUpdate, columns)}>Refresh Feed</button>
      <div className="defaultText">Last refresh: {(new Date(lastUpdate)).toLocaleString()}</div>
    </div>
  );
};

export const DarkToggle = () => {
  const [ isDark, setIsDark ] = useState(isDarkMode());
  return <button onClick={() => setIsDark(toggleDarkMode())}>{isDark ? "🌞" : "🌚"}</button>;
};

export const SettingsColumn = ({ hash }) => {
  return (
    <div className="card">
      <AddColumn />
      <ShareLink hash={hash} />
      <NewDeck />
      <DuplicateDeck hash={hash} />
      <DarkToggle />
      <RefreshFeed />
    </div>
  );
};
