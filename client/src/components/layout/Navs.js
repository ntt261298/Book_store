import React from 'react';
import '../../style/nav.css';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

export default class Navs extends React.Component {
  render() {
    return (
        <nav class="nav-bar">
          <div class="category">
            <h2>CATEGORIES</h2>
            <ul>
              <li><a href="#"></a>Science fiction</li>
              <li><a href="#"></a>Action and Adventure</li>
              <li><a href="#"></a>Romance</li>
              <li><a href="#"></a>Mystery</li>
              <li><a href="#"></a>Horror</li>
              <li><a href="#"></a>Health</li>
              <li><a href="#"></a>Guide</li>
              <li><a href="#"></a>Children's</li>
              <li><a href="#"></a>Religion, Spirituality</li>
              <li><a href="#"></a>History</li>
              <li><a href="#"></a>Math</li>
            </ul>
          </div>
          <div class="price">
            <h2>PRICES</h2>
            <div class="price-bar">
              <div class="bar">
                <div class="circle-price circle-price-1"></div>
                <div class="circle-price circle-price-2"></div>
              </div>
            </div>
            <span>$10</span>
            <span class="price-search"></span>
            <span>$50</span>
          </div>
        </nav>
    );
  }
}
