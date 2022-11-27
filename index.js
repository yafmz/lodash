import _ from 'lodash'

const notes = [
  {
    nom: 'Yao',
    prenom: 'Ange',
    note: 18,
    sexe: 'M',
  },
  {
    nom: 'Tanoh',
    prenom: 'David',
    note: 11,
    sexe: 'M',
  },
  {
    nom: 'Koné',
    prenom: 'Ismaël',
    note: 16,
    sexe: 'M',
  },
  {
    nom: 'Koné',
    prenom: 'Adama',
    note: 10,
    sexe: 'M',
  },
  {
    nom: 'Digbeu',
    prenom: 'Cravate',
    note: 12,
    sexe: 'M',
  },
  {
    nom: 'Gohou',
    prenom: 'Michel',
    note: 15,
    sexe: 'M',
  },
  {
    nom: 'Koutouan',
    prenom: 'Adrienne',
    note: 13,
    sexe: 'F',
  },
  {
    nom: 'Digbeu',
    prenom: 'Ibo',
    note: 16,
    sexe: 'M',
  },
  {
    nom: 'Taba',
    prenom: 'Thérèse',
    note: 19,
    sexe: 'F',
  },
  {
    nom: 'Bah',
    prenom: 'Jacques',
    note: 17,
    sexe: 'M',
  },
  {
    nom: 'Bohiri',
    prenom: 'Michel',
    note: 14,
    sexe: 'M',
  },
  {
    nom: 'Papouet',
    prenom: 'Clémentine',
    note: 15,
    sexe: 'F',
  },
  {
    nom: 'Traoré',
    prenom: 'Nastou',
    note: 18,
    sexe: 'F',
  },
  {
    nom: 'Wabéhi',
    prenom: 'Amélie',
    note: 13,
    sexe: 'F',
  },
  {
    nom: 'Abass',
    prenom: 'Ibn',
    note: 15,
    sexe: 'M',
  },
  {
    nom: 'Oméga',
    prenom: 'David',
    note: 12,
    sexe: 'M',
  },
  {
    nom: 'Gbizié',
    prenom: 'Zoumanan',
    note: 19,
    sexe: 'M',
  },
  {
    nom: 'Guéï',
    prenom: 'Veh',
    note: 13,
    sexe: 'M',
  },
]


const premierEtudiant = _.head(notes)
const dernierEtudiant = _.last(notes)
// const kone = _.find(notes, (p) => p.nom == 'Koné')
const kone = _.findLast(notes, (p) => p.nom == 'Koné')

const group = _.groupBy(notes, (p) => p.sexe)

console.log(group)