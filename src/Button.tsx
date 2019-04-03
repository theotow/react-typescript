import * as React from 'react';

export default class Button extends React.Component<
  { name: string; onClick?: () => void },
  any
> {
  render() {
    return <button onClick={this.props.onClick}>{this.props.name}</button>;
  }
}
