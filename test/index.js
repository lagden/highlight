'use strict';

import test from 'ava';
import highlight from '../index';

test('Deve retornar o texto com as palavras "Bond" marcadas com a tag <mark>', t => {
	const source = 'My name is Bond, James Bond...';
	const marked = highlight(source, 'Bond');
	t.is(marked, 'My name is <mark>Bond</mark>, James <mark>Bond</mark>...');
});

test('Deve retornar o texto com as palavras "Bond" marcadas com a tag <mark> buscando por `Bond `', t => {
	const source = 'My name is Bond, James Bond...';
	const marked = highlight(source, 'Bond ');
	t.is(marked, 'My name is <mark>Bond</mark>, James <mark>Bond</mark>...');
});

test('Deve retornar o texto com as palavras "i", "is", "B", "ond", "{" e "..." marcadas com a tag <mark> buscando por `B .. <mark> i is { ond `', t => {
	const source = 'My name is Bond, {James} Bond...';
	const marked = highlight(source, 'B .. <mark> i is { ond ');
	t.is(marked, 'My name <mark><mark>i</mark>s</mark> <mark>B</mark><mark>ond</mark>, <mark>{</mark>James} <mark>B</mark><mark>ond</mark><mark>...</mark>');
});

test('Deve retornar o texto com as palavras "Bond" marcadas com a tag <b>', t => {
	const source = 'My name is Bond, James Bond...';
	const marked = highlight(source, 'Bond', '<b>$1</b>');
	t.is(marked, 'My name is <b>Bond</b>, James <b>Bond</b>...');
});

test('Deve retornar o texto somente com a palavra "James Bond" marcada com a tag <b>', t => {
	const source = 'My name is Bond, James Bond...';
	const marked = highlight(source, 'James Bond', '<b>$1</b>', false);
	t.is(marked, 'My name is Bond, <b>James Bond</b>...');
});

test('Deve retornar o texto com as palavras "James" e "Bond" marcadas com a tag <mark>', t => {
	const source = 'My name is Bond, James Bond...';
	const marked = highlight(source, 'James Bond');
	t.is(marked, 'My name is <mark>Bond</mark>, <mark>James</mark> <mark>Bond</mark>...');
});

test('Deve retornar o texto original', t => {
	const source = 'My name is Bond, James Bond...';
	const marked = highlight(source, 'Sherlock Holmes');
	t.is(marked, source);
});
