import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import HistoryList from '../components/profile/HistoryList';
import ProfileDetail from '../components/profile/ProfileDetail';

function ProfilePage() {
    return (
      <div>
        <h1>karapurofairu</h1>
        <Row className="justify-content-center" style={{ margin: "0 auto"}}>
          {/* in style= {{background: "navy"}} */}
          <Col sm={5} md={2}>
            <ProfileDetail name="Matsuno Karamatsu" username="besutoburazaa" email="nopuran@matsumail.com" address="Burusukai Street" profile_picture="pp_karamatsu.jpg"/>  
          </Col>
          <Col sm={5} md={8}>
            <HistoryList history={entries} />
          </Col>
        </Row>
        
        {/* <MovieCard title="kkk" onClick={() => console.log("heh")} />
        <MovieCard title="heh" onClick={() => console.log("bukan heh")}/> */}
      </div>
    );
  }

  const entries = [
    {
      end_date: null,
      movie_name: "Osomatsu-san: The Movie",
      rent_item_id: 14,
      start_date: "2019-12-12T12:34:56",
      status: "on_delivery",
      cover_image: "osomatsusan_the_movie.jpg"
    },
    {
      end_date: null,
      movie_name: "Re: Osomatsu-kun",
      rent_item_id: 1,
      start_date: "2020-01-01T12:34:56",
      status: "on_rent",
      cover_image: "re_osomatsukun.jpg"
    },
    {
      end_date: null,
      movie_name: "Re: Osomatsu-kun",
      rent_item_id: 1,
      start_date: "2020-01-01T12:34:56",
      status: "on_rent",
      cover_image: "re_osomatsukun.jpg"
    },
    {
      end_date: null,
      movie_name: "Re: Osomatsu-kun",
      rent_item_id: 1,
      start_date: "2020-01-01T12:34:56",
      status: "on_rent",
      cover_image: "re_osomatsukun.jpg"
    }
  ]

  export default ProfilePage;