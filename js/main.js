document.addEventListener('DOMContentLoaded', () => {
	const toTop = document.querySelector('#toTop')

	window.addEventListener('scroll', controlScroll)

	function controlScroll() {
		const st = document.body.scrollTop || document.documentElement.scrollTop
		const display = toTop.style.display
		const cl = toTop.classList
		if (st > 300) {
			toTop.style.display = 'block'
			cl.remove('hide')
			cl.add('show')
			setTimeout(() => {cl.add('rotate')}, 2100)
	  } else {
			if (display === 'block') {
				cl.remove('show')
				cl.add('hide')
				setTimeout(() => {
					cl.remove('rotate')
					toTop.style.display = 'none'
				}, 2000)
			}
	  }
	}

	toTop.addEventListener('click', () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	})

	const ej01 = (str) => {
		switch (str.toLowerCase()) {
			case 'ricardo':
				return `${str}: es tu tío`
			case 'roberto':
				return `${str}: es tu hermano`
			case 'argentina':
				return `${str}: el país al que perteneces`
			case 'dinamita':
				return `${str}: es tu gato`
			default:
				return 'No existe relación'
		}
	}
	const ej02 = (n1, n2) => {
		return n1 === 100 || n2 === 100 || n1 + n2 === 100
	}
	const ej03 = (str) => {
		if (!str.includes('.')) {
			return 'el archivo no tiene extensión'
		}
		const ext = str.split('.')
		return ext[ext.length - 1]
	}
	const ej04 = (temp, grados) => {
		const faren = (temp) => (temp - 32) * 5 / 9
		const cent = (temp) => temp * 9 / 5 + 32
		switch (grados.toLowerCase()) {
			case 'f':
				return faren(temp)
			case 'c':
				return cent(temp)
			default:
				return 'No existe función'
		}
	}
	const ej05 = () => {
		const d = new Date()
		const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
		const f = `Hoy es: ${days[d.getDay()]}, hora: ${d.getHours()}:${d.getMinutes()}`
		return f
	}

	document.addEventListener('click', e => {
		const { target: { tagName, id } } = e
		if (tagName === 'BUTTON') {
			switch (id) {
				case 'ej01':
					const e01 = prompt('Ingresa un conocido o algo: ')
					return alert(ej01(e01))
				case 'ej02':
					const e02_1 = parseInt(prompt('Ingresá número 1: '))
					const e02_2 = parseInt(prompt('Ingresá número 2: '))
					const res02 = ej02(e02_1, e02_2) ? `${e02_1} - ${e02_2}: la suma de ambas es 100 o alguna vale 100` : 'Ningún número vale o está cerca de 100'
					return alert(res02)
				case 'ej03':
					const e03 = prompt('Ingresá el nombre de un archivo y su extensión: ')
					return alert(`La extensión es: ${ej03(e03)}`)
				case 'ej04':
					const e04_1 = parseFloat(prompt('Ingresá una temperatura: '))
					const e04_2 = prompt('Ingresá a que lo querés convertir. faren (F) o cent (C): ')
					return alert(ej04(e04_1, e04_2))
				case 'ej05':
					return alert(ej05())
				default:
					console.log('ELEGIR EJERCICIO')
			}
		}
	})

})
