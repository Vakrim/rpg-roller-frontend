import React from 'react';
import styled from 'styled-components';
import Field from './Field';

export default class CharacterCard extends React.PureComponent {
  state = {
    name: '',
    wounds: 5,
    weaponSkill: 30,
    ballisticSkill: 30,
    strength: 30,
    toughness: 30,
    agility: 30,
    intelligence: 30,
    perception: 30,
    willPower: 30,
    fellowship: 30,
    influence: 30,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      name,
      wounds,
      weaponSkill,
      ballisticSkill,
      strength,
      toughness,
      agility,
      intelligence,
      perception,
      willPower,
      fellowship,
      influence,
    } = this.state;

    return (
      <CardWrapper>
        <Field name="name" value={name} onChange={this.handleChange} />
        <Field name="wounds" value={wounds} onChange={this.handleChange} />
        <Field
          name="weaponSkill"
          value={weaponSkill}
          onChange={this.handleChange}
        />
        <Field
          name="ballisticSkill"
          value={ballisticSkill}
          onChange={this.handleChange}
        />
        <Field name="strength" value={strength} onChange={this.handleChange} />
        <Field
          name="toughness"
          value={toughness}
          onChange={this.handleChange}
        />
        <Field name="agility" value={agility} onChange={this.handleChange} />
        <Field
          name="intelligence"
          value={intelligence}
          onChange={this.handleChange}
        />
        <Field
          name="perception"
          value={perception}
          onChange={this.handleChange}
        />
        <Field
          name="willPower"
          value={willPower}
          onChange={this.handleChange}
        />
        <Field
          name="fellowship"
          value={fellowship}
          onChange={this.handleChange}
        />
        <Field
          name="influence"
          value={influence}
          onChange={this.handleChange}
        />
      </CardWrapper>
    );
  }
}

const CardWrapper = styled.div`
  display: inline-block;
  background: #fff;
  width: 200px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 5px;
`;
