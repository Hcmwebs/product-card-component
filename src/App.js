import React from 'react'
import { Nav } from './Components'
import styled from 'styled-components'
import profiles from './db/data'

const App = () => {
	return (
		<>
			<Wrapper>
				{profiles.map((profile) => {
					const { id, img, title, name, body, icon } = profile

					return (
						<div className='card' key={id}>
							<div className='card-header'>
								<img src={img} alt={name} className='img' />
							</div>
							<div className='card-body'>
								<h3>{name}</h3>
								<h4>
									{title} {icon}
								</h4>
								<p>{body}</p>
							</div>
							<button className='btn'>read more</button>
						</div>
					)
				})}
			</Wrapper>
		</>
	)
}

const Wrapper = styled.div`
	width: min(90%, 1440px);
	padding-inline: 1rem;
	display: grid;
	place-items: center;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2.5rem;
	margin: 0 auto;

	.card {
		width: min(100%, 300px);
		display: grid;
		place-items: center;
		gap: 0.75rem;
		padding: 2rem 1.5rem;
		box-shadow: 0 2px 15px 2px rgba(0, 0, 0, 0.1);
		border-radius: 0.5rem;
		background-color: #fff;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
	}

	.card:hover {
		box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.2);
	}

	.card-header {
		width: 100%;
		display: grid;
		place-items: center;
		overflow: hidden;
	}

	.img {
		width: 200px;
		height: 200px;
		display: block;
		object-fit: cover;
		border-radius: 50%;
		border: 2px solid rgba(0, 0, 255, 0.4);
	}

	.card:hover .img {
		border-color: rgba(0, 0, 255, 1);
	}
	.card-body {
		display: grid;
		place-items: center;
		padding-inline: 1.5rem;
		gap: 0.5rem;
	}
	h3 {
		font-weight: 300;
	}
	.btn {
		font-size: 1rem;
		font-weight: 300;
		padding: 0.75rem 1.5rem;
		text-transform: capitalize;
		border: none;
		border-radius: 0.25rem;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(0, 0, 255, 0.8);
		cursor: pointer;
	}

	.card:hover .btn {
		color: rgba(0, 0, 0, 1);
		background-color: rgba(255, 255, 255, 1);
		border: 1px solid rgba(0, 0, 255, 1);
	}

	.icon {
		color: rgba(0, 0, 255, 0.4);
	}

	.card:hover .icon {
		color: rgba(0, 0, 255, 1);
	}
`

export default App
