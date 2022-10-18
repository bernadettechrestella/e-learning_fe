import { useEffect, useState } from "react";

const ListVideoAdmin = () => {
    const [dataListVideo, setDataListVideo] = useState([]);

    useEffect(() => {
        getData()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getData = () => {
        const token = localStorage.getItem('dataLoginAdmin');
        const sendData = {
            token
        }
        fetch(`http://127.0.0.1:8000/listKonten`, {
            method: 'POST',
            body: JSON.stringify(sendData),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(hasil => {
            setDataListVideo(hasil.data)
        })
        .catch(err => {
            alert(err)
        })
    }


    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"></hr>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </div>

            <div className="row justify-content-center">
                { dataListVideo.map((data, index) => {
                    return (
                        <div key={index} className="card m-3 col-md-4 col-lg-3" style={{ width: '18rem' }}>
                            <img src={data.link_thumbnail} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{data.judul}</h5>
                                <p className="card-text">{data.keterangan}</p>
                            </div>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default ListVideoAdmin