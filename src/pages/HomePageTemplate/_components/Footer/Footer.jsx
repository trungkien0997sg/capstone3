import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <div className="footer-column">
          <h3>Cinema Việt Nam</h3>
          <ul>
            <li>
              <a href="#">Giới Thiệu</a>
            </li>
            <li>
              <a href="#">Tiện Ích Online</a>
            </li>
            <li>
              <a href="#">Thẻ Quà Tặng</a>
            </li>
            <li>
              <a href="#">Tuyển Dụng</a>
            </li>
            <li>
              <a href="#">Liên Hệ Quảng Cáo Cinema</a>
            </li>
            <li>
              <a href="#">Dành cho đối tác</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Điều khoản sử dụng</h3>
          <ul>
            <li>
              <a href="#">Điều Khoản Chung</a>
            </li>
            <li>
              <a href="#">Điều Khoản Giao Dịch</a>
            </li>
            <li>
              <a href="#">Chính Sách Thanh Toán</a>
            </li>
            <li>
              <a href="#">Chính Sách Bảo Mật</a>
            </li>
            <li>
              <a href="#">Câu Hỏi Thường Gặp</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Kết nối với chúng tôi</h3>
          <div className="social-links">
            <a href="#">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="youtube-icon.png" alt="YouTube" />
            </a>
            <a href="#">
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="zalo-icon.png" alt="Zalo" />
            </a>
          </div>
          <div className="gov-link">
            <a href="#">
              <img src="gov-icon.png" alt="Đã Thông Báo Bộ Công Thương" />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Chăm sóc khách hàng</h3>
          <ul>
            <li>Hotline: 0808 15 0808</li>
            <li>
              Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)
            </li>
            <li>
              Email hỗ trợ:{" "}
              <a href="mailto:hoidap@Cinema.vn">hoidap@Cinema.vn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>COPYRIGHT 2024 Cinema VIETNAM CO., LTD. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
