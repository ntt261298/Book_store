import React from 'react';
import '../../style/footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="main-footer">
        <div className="team">
          <h3>Design By Ninetwen Team</h3>
          <p>Nguyễn Tiến Trường</p>
          <p>Đoàn Duy Đạt</p>
          <p>Trần Thị Hoài</p>
          <p>Nguyễn Văn Huy</p>
          <p>Nguyễn Đức Trọng</p>
        </div>
      <div className="open-time">
        <h3>Open</h3>
        <p>Every day from 08:00 - 18:00</p>
      </div>
      <div className="payment">
        <h3>Payment</h3>
        <img src="../image/icon visa.svg" alt=""/>
        <img src="../image/credit-card.svg" alt=""/>
        <img src="../image/bitcoin.svg" alt=""/>
        <img src="../image/cast-multiple.svg" alt=""/>
        <img src="../image/internet banking account.svg" alt=""/>
      </div>
      <div className="socials">
        <h3>Socials</h3>
        <img src="../image/facebook.svg" alt=""/>
        <img src="../image/instagram.svg" alt=""/>
        <img src="../image/youtube.svg" alt=""/>
        <img src="../image/twitter.svg" alt=""/>
        <img src="../image/pinterest.svg" alt=""/>
      </div>
      <div className="download">
        <h3>Download App</h3>
        <img src="../image/play-store.svg" alt=""/>
          <img src="../image/apple.svg" alt=""/>
          <img src="../image/windows.svg" alt=""/>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <div>
            <img src="../image/gmail.svg" alt=""/><span>/NineBook</span>
          </div>
          <div>
            <img src="../image/phone.svg" alt=""/><span>0999.999.999</span>
          </div>
          <div>
            <img src="../image/baseline-place-24px.svg" alt=""/><span>69 Giải Phóng, Hà Nội</span>
          </div>
        </div>
        <div className="feedback">
          <h3>Feedback</h3>
          <textarea name="name"></textarea>
          <input type="submit" value="send"/>
        </div>
      </div>
    );
  }
}
