import { useState, useEffect } from "react";
import { API_URL } from "services/constants/apiUrl";

type Resp = [any, boolean];

type fetchApiState = {
    loading: boolean;
    resp: any;
    error: any;
}

type Props = {
    apiPath: string;
    callbackFn?: (params: string) => void;
};

const useFetchApi = ({ apiPath, callbackFn }: Props): Resp => {
    const [data, setData] = useState<fetchApiState>({
        loading: true,
        error: null,
        resp: null,
    });

    useEffect(() => {
        fetch(`${API_URL}/${apiPath}`)
            .then((resp) => resp.json())
            .then((resp) => {
                callbackFn && callbackFn(resp);
                setData({
                    loading: false,
                    error: null,
                    resp: resp,
                });
            })
            .catch((err) => {
                setData({
                    loading: false,
                    error: err,
                    resp: [],
                });
            });
    }, []);

    return [data.resp, data.loading];
};

export default useFetchApi;
