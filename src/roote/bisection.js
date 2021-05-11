import React from "react";
import { compile } from "mathjs";
import { Table, Button } from "antd";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const columns = [
  {
    title: "Iteration",
    dataIndex: "iteration",
    width: 100
  },
  {
    title: "XL",
    dataIndex: "xl",
    width: 180
  },
  {
    title: "XR",
    dataIndex: "xr",
    width: 180
  },
  {
    title: "Error",
    dataIndex: "error"
  }
];

var data = [];

class Bisection extends React.Component {
  constructor() {
    super();
    this.state = {
      XL: 0,
      XR: 0,
      fx: "",
      er: 0.000001,
      tables: false
    };
    this.handleChage = this.handleChage.bind(this);
    this.fxbisection = this.fxbisection.bind(this);
  }

  handleChage(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  fxbisection(xl, xr) {
    var sum = parseFloat(0.0);
    var xm = 0;
    var Xl = [];
    var Xr = [];
    var Er = [];
    var xmn = 0;
    var ii = 0;
    sum = 10.0;
    while (sum > this.state.er) {
      Xl[ii] = xl;
      Xr[ii] = xr;
      xm = (xl + xr) / 2;
      var fxm = this.fun(xm);
      var xm1 = fxm * this.fun(xr);

      if (xm1 > 0) {
        xr = xm;
      } else {
        xl = xm;
      }
      xmn = (xl + xr) / 2;
      sum = this.Err(xmn, xm);
      sum = Math.abs(sum).toFixed(8);
      Er[ii] = sum;
      ii++;
    }
    this.setdata(Xl, Xr, Er);
    this.setState({
      tables: true
    });
  }

  fun(X) {
    var expr = compile(this.state.fx);
    let scope = { x: parseFloat(X) };
    return expr.eval(scope);
  }

  Err(n, m) {
    return (n - m) / n;
  }

  setdata(Xl, Xr, Er) {
    data = [];
    for (let i = 0; i < Xl.length; i++) {
      data.push({
        iteration: i + 1,
        xl: Xl[i],
        xr: Xr[i],
        error: Er[i]
      });
    }
  }

  render() {
    return (
      <div align="left">
        <div>
          <div>
            <label>Fx:</label>
            &nbsp;
            <input
              name="fx"
              onChange={this.handleChage}
              value={this.state.value}
            />
            &emsp;<label>XL:</label>
            &nbsp;
            <input
              name="XL"
              onChange={this.handleChage}
              value={this.state.value}
            />
            &emsp;<label>XR:</label>
            &nbsp;
            <input
              name="XR"
              value={this.state.value}
              onChange={this.handleChage}
            />
            &emsp;
            <Button
              onClick={() =>
                this.fxbisection(
                  parseFloat(this.state.XL),
                  parseFloat(this.state.XR)
                )
              }
              type="primary"
            >
              Enter
            </Button>
          </div>
          <br />

          <div align="center" >
            <Table columns={columns} dataSource={data} />
          </div>

          <div>
            <LineChart width={500} height={250} data={data}>
              <Line type="monotone" dataKey="error" stroke="red" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="error" />
              <YAxis />
            </LineChart>
          </div>
        </div>
      </div>
    );
  }
}
export default bisection