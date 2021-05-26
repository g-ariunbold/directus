import { Field } from '@/types';
import { AsyncComponent, Component } from 'vue';
import VueI18n from 'vue-i18n';

export interface PanelConfig {
	id: string;
	name: string;
	icon: string;
	description?: string | VueI18n.TranslateResult;
	component: Component | AsyncComponent;
	options: DeepPartial<Field>[] | Component | AsyncComponent;
	minWidth: number;
	minHeight: number;
}

export type PanelDefineParam = PanelDefineParamGeneric<PanelConfig>;
export type PanelDefineParamGeneric<T> = T | (() => T);