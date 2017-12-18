import { OutputSelector } from 'reselect';
import { Unsubscribe, Store } from 'redux';

declare const defaultExport: <S, R, C>(store: Store<S>, selector: OutputSelector<S, R, C>, cb: C) => Unsubscribe;

export default defaultExport;
