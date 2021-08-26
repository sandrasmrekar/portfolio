//kolla så att den close och shows och visar meddelande. 
import React from 'react';
import  { render,unmountComponentAtNode } from 'react-dom'
import {act} from 'react-dom/test-utils'
import Notification from '.'


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


test('check if notification shows and dissapears', () => {
    const onChange = jest.fn();

    // Show notification
    act(()=>{
        render(<Notification show={true} onClose={onChange} />, container)
    })
    expect(container.textContent).toBe("X")

    // Close notification
    const button = document.querySelector("[data-testid=toggle]");
    act(()=>{
        button.dispatchEvent(new MouseEvent("click", { bubbles:true }))
    })
    expect(onChange).toHaveBeenCalledTimes(1);
})

test('notification shows message', ()=>{
    act(()=>{
        render(<Notification show={true} message="Hello"/>, container)
    })
    expect(container.textContent).toBe("HelloX")
})