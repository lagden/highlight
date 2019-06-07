/* eslint import/extensions: 0 */
'use strict'

import test from 'ava'
import highlight from '../src/index.mjs'

test('Deve retornar o texto com as palavras "Bond" marcadas com a tag <mark> buscando por `Bond `', t => {
	const source = 'My name is Bond, James Bond...'
	const marked = highlight(source, 'Bond ')
	t.is(marked, 'My name is <mark>Bond</mark>, James <mark>Bond</mark>...')
})

test('Deve retornar o texto com as palavras "i", "is", "B", "ond", "{" e "..." marcadas com a tag <mark> buscando por `B .. <mark> i is { ond `', t => {
	const source = 'My name is Bond, {James} Bond...'
	const marked = highlight(source, 'B .. <mark> i is { ond ')
	t.is(marked, 'My name <mark>is</mark> <mark>B</mark><mark>ond</mark>, <mark>{</mark>James} <mark>B</mark><mark>ond</mark><mark>..</mark>.')
})

test('Deve retornar o texto com as palavras "i", "is", "B", "ond", "e", "{" e ".." marcadas com a tag <mark> buscando por `B .. <mark> i is { ond `', t => {
	const source = 'My name is Bond, {James} Bond...'
	const marked = highlight(source, 'B .. <mark> is i e { ond ')
	t.is(marked, 'My nam<mark>e</mark> <mark>is</mark> <mark>B</mark><mark>ond</mark>, <mark>{</mark>Jam<mark>e</mark>s} <mark>B</mark><mark>ond</mark><mark>..</mark>.')
})

test('Deve retornar o texto com as palavras "Bond" marcadas com a tag <b>', t => {
	const source = 'My name is Bond, James Bond...'
	const marked = highlight(source, 'Bond', {tpl: '<b>$&</b>'})
	t.is(marked, 'My name is <b>Bond</b>, James <b>Bond</b>...')
})

test('Deve retornar o texto somente com a palavra "James Bond" marcada com a tag <b>', t => {
	const source = 'My name is Bond, James Bond...'
	const marked = highlight(source, 'James Bond', {tpl: '<b>$&</b>', split: false})
	t.is(marked, 'My name is Bond, <b>James Bond</b>...')
})

test('Deve retornar o texto com as palavras "James" e "Bond" marcadas com a tag <mark>', t => {
	const source = 'My name is Bond, James Bond...'
	const marked = highlight(source, 'James Bond')
	t.is(marked, 'My name is <mark>Bond</mark>, <mark>James</mark> <mark>Bond</mark>...')
})

test('Deve retornar o texto original', t => {
	const source = 'My name is Bond, James Bond...'
	const marked = highlight(source, 'Sherlock Holmes')
	t.is(marked, source)
})

test('[Case sensitive A] Deve retornar o texto com as palavras "B" e "b" marcadas com a tag <mark>', t => {
	const source = 'Hey Brow!! Tudo blz...'
	const marked = highlight(source, 'b', {caseSensitive: false})
	t.is(marked, 'Hey <mark>B</mark>row!! Tudo <mark>b</mark>lz...')
})

test('[Case sensitive B] Deve retornar o texto com as palavras "B" e "b" marcadas com a tag <mark>', t => {
	const source = 'Tudo blz, Brow!! Basta você bater na minha mão...'
	const marked = highlight(source, 'B', {caseSensitive: false})
	t.is(marked, 'Tudo <mark>b</mark>lz, <mark>B</mark>row!! <mark>B</mark>asta você <mark>b</mark>ater na minha mão...')
})

test('Big output', t => {
	const source = 'A system for offer based restaurant reservations comprises a processor and a memory. The processor is configured to: receive a request for a reservation including a set of attributes such as a date or date range, a time range, a location, a cuisine, and a party size; determine a set of available reservations based on an actual table availability for the date, time, and the party size; determine one or more offers based on the date, time, and the party size; determine an overlapping subset between the set of available reservations and the one or more offers; and provide an indication of the overlapping subset. The memory is coupled to the processor and is configured to provide the processor with instructions. There are many ways to do that.'
	const marked = highlight(source, 'are to a is in on the of at or an', {tpl: '<b>$&</b>'})
	t.is(marked, 'A system f<b>or</b> <b>of</b>fer b<b>a</b>sed rest<b>a</b>ur<b>an</b>t reserv<b>at</b>i<b>on</b>s compr<b>is</b>es <b>a</b> process<b>or</b> <b>an</b>d <b>a</b> mem<b>or</b>y. The process<b>or</b> <b>is</b> c<b>on</b>figured <b>to</b>: receive <b>a</b> request f<b>or</b> <b>a</b> reserv<b>at</b>i<b>on</b> <b>in</b>clud<b>in</b>g <b>a</b> set <b>of</b> <b>at</b>tributes such <b>a</b>s <b>a</b> d<b>at</b>e <b>or</b> d<b>at</b>e r<b>an</b>ge, <b>a</b> time r<b>an</b>ge, <b>a</b> loc<b>at</b>i<b>on</b>, <b>a</b> cu<b>is</b><b>in</b>e, <b>an</b>d <b>a</b> p<b>a</b>rty size; determ<b>in</b>e <b>a</b> set <b>of</b> <b>a</b>v<b>a</b>il<b>a</b>ble reserv<b>at</b>i<b>on</b>s b<b>a</b>sed <b>on</b> <b>an</b> <b>a</b>ctu<b>a</b>l t<b>a</b>ble <b>a</b>v<b>a</b>il<b>a</b>bility f<b>or</b> <b>the</b> d<b>at</b>e, time, <b>an</b>d <b>the</b> p<b>a</b>rty size; determ<b>in</b>e <b>on</b>e <b>or</b> m<b>or</b>e <b>of</b>fers b<b>a</b>sed <b>on</b> <b>the</b> d<b>at</b>e, time, <b>an</b>d <b>the</b> p<b>a</b>rty size; determ<b>in</b>e <b>an</b> overl<b>a</b>pp<b>in</b>g subset between <b>the</b> set <b>of</b> <b>a</b>v<b>a</b>il<b>a</b>ble reserv<b>at</b>i<b>on</b>s <b>an</b>d <b>the</b> <b>on</b>e <b>or</b> m<b>or</b>e <b>of</b>fers; <b>an</b>d provide <b>an</b> <b>in</b>dic<b>at</b>i<b>on</b> <b>of</b> <b>the</b> overl<b>a</b>pp<b>in</b>g subset. The mem<b>or</b>y <b>is</b> coupled <b>to</b> <b>the</b> process<b>or</b> <b>an</b>d <b>is</b> c<b>on</b>figured <b>to</b> provide <b>the</b> process<b>or</b> with <b>in</b>structi<b>on</b>s. There <b>are</b> m<b>an</b>y w<b>a</b>ys <b>to</b> do th<b>at</b>.')
})

test('[Case sensitive] Big output', t => {
	const source = 'A system for offer based restaurant reservations comprises a processor and a memory. The processor is configured to: receive a request for a reservation including a set of attributes such as a date or date range, a time range, a location, a cuisine, and a party size; determine a set of available reservations based on an actual table availability for the date, time, and the party size; determine one or more offers based on the date, time, and the party size; determine an overlapping subset between the set of available reservations and the one or more offers; and provide an indication of the overlapping subset. The memory is coupled to the processor and is configured to provide the processor with instructions. There are many ways to do that.'
	const marked = highlight(source, 'are to a is in on the of at or an', {tpl: '<b>$&</b>', caseSensitive: false})
	t.is(marked, '<b>A</b> system f<b>or</b> <b>of</b>fer b<b>a</b>sed rest<b>a</b>ur<b>an</b>t reserv<b>at</b>i<b>on</b>s compr<b>is</b>es <b>a</b> process<b>or</b> <b>an</b>d <b>a</b> mem<b>or</b>y. <b>The</b> process<b>or</b> <b>is</b> c<b>on</b>figured <b>to</b>: receive <b>a</b> request f<b>or</b> <b>a</b> reserv<b>at</b>i<b>on</b> <b>in</b>clud<b>in</b>g <b>a</b> set <b>of</b> <b>at</b>tributes such <b>a</b>s <b>a</b> d<b>at</b>e <b>or</b> d<b>at</b>e r<b>an</b>ge, <b>a</b> time r<b>an</b>ge, <b>a</b> loc<b>at</b>i<b>on</b>, <b>a</b> cu<b>is</b><b>in</b>e, <b>an</b>d <b>a</b> p<b>a</b>rty size; determ<b>in</b>e <b>a</b> set <b>of</b> <b>a</b>v<b>a</b>il<b>a</b>ble reserv<b>at</b>i<b>on</b>s b<b>a</b>sed <b>on</b> <b>an</b> <b>a</b>ctu<b>a</b>l t<b>a</b>ble <b>a</b>v<b>a</b>il<b>a</b>bility f<b>or</b> <b>the</b> d<b>at</b>e, time, <b>an</b>d <b>the</b> p<b>a</b>rty size; determ<b>in</b>e <b>on</b>e <b>or</b> m<b>or</b>e <b>of</b>fers b<b>a</b>sed <b>on</b> <b>the</b> d<b>at</b>e, time, <b>an</b>d <b>the</b> p<b>a</b>rty size; determ<b>in</b>e <b>an</b> overl<b>a</b>pp<b>in</b>g subset between <b>the</b> set <b>of</b> <b>a</b>v<b>a</b>il<b>a</b>ble reserv<b>at</b>i<b>on</b>s <b>an</b>d <b>the</b> <b>on</b>e <b>or</b> m<b>or</b>e <b>of</b>fers; <b>an</b>d provide <b>an</b> <b>in</b>dic<b>at</b>i<b>on</b> <b>of</b> <b>the</b> overl<b>a</b>pp<b>in</b>g subset. <b>The</b> mem<b>or</b>y <b>is</b> coupled <b>to</b> <b>the</b> process<b>or</b> <b>an</b>d <b>is</b> c<b>on</b>figured <b>to</b> provide <b>the</b> process<b>or</b> with <b>in</b>structi<b>on</b>s. <b>The</b>re <b>are</b> m<b>an</b>y w<b>a</b>ys <b>to</b> do th<b>at</b>.')
})

test('Numbers', t => {
	const source = 'I am 11 years 11 old'
	const marked = highlight(source, 'am 1', {tpl: '<b>$&</b>'})
	t.is(marked, 'I <b>am</b> <b>1</b><b>1</b> years <b>1</b><b>1</b> old')
})
