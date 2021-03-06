const CREATE_ACTOR = 'CREATE_ACTOR';
const UPDATE_ACTOR = 'UPDATE_ACTOR';

export const createActor = () => ({
  type: CREATE_ACTOR,
});

export const updateActor = (id, fieldName, value) => ({
  type: UPDATE_ACTOR,
  id,
  fieldName,
  value,
});

const DEFAULT_ACTOR = {
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

const initalState = {
  actors: [],
};

let newActorId = 1;
export default (state = initalState, action) => {
  switch (action.type) {
    case CREATE_ACTOR:
      return {
        ...state,
        actors: [...state.actors, { id: newActorId++, ...DEFAULT_ACTOR }],
      };
    case UPDATE_ACTOR:
      return {
        ...state,
        actors: state.actors.map(
          actor =>
            actor.id === action.id
              ? { ...actor, [action.fieldName]: action.value }
              : actor
        ),
      };
    default:
      return state;
  }
};
