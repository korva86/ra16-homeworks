import React, {useEffect} from 'react';
import {News} from "./components/News";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewsRequest, firstFetchNewsRequest} from "./actions/actionCreators";
import Button from "./components/Button";

function App() {
    const {news, error, lastSeenId} = useSelector(state => state.newsList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(firstFetchNewsRequest())
    }, [dispatch]);

    const fetchHandler = () => {
        dispatch(fetchNewsRequest(lastSeenId))
    };

    return (
        <div className="App container d-flex justify-content-center">
            <div className="col-md-6 mt-4">
                {error && (
                    <div className="alert alert-danger mt-3 d-flex justify-content-between">
                        <p className="m-2">{error.message}</p>
                    </div>
                )}
                {news && news.map((item) => <News item={item} key={item.id} /> )}
                <Button fetchHandler={() => fetchHandler()} />
            </div>
        </div>
    );
}

export default App;
