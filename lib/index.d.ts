import { OutputSelector } from 'reselect';
import { Unsubscribe, Store, Action } from 'redux';

declare const defaultExport: <S, A extends Action, R, C>(store: Store<S, A>, selector: OutputSelector<S, R, C>, cb: (res: R) => void) => Unsubscribe;

export default defaultExport;
