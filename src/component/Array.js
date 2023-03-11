import React from 'react'

export default function Array() {
  return (
    <div className='array-page'>
         <ul id='array-q'>
        <li>
            <label for="first">What is Array?<span>&#x3e;</span></label>
            <div className="q-ans">
                <p>
                An array is a collection of similar data elements. These data elements have the same data type. 
The elements of the array are stored in consecutive memory locations and are referenced by an 
index (also known as the subscript).

                </p>
            </div>
        </li>
        <li>
            <label for="first">In C, arrays are declared using the following syntax:<span>&#x3e;</span></label>
            
            <div className="q-ans">
                <p>
                type name[size];<br/>
For example,<br/>
int marks[10];

                </p>
            </div>
        </li>
        <li>
            <label for="first">Arrays are generally used when we want to store large amount of similar type of data. But they 
have the following limitations:<span>&#x3e;</span></label>
            <div className="q-ans">
                <p>
                Arrays are of fixed size.<br/>
Data elements are stored in contiguous memory locations which may not be always available.<br/>
 Insertion and deletion of elements can be problematic because of shifting of elements from 
their positions.

                </p>
            </div>
        </li>
       </ul>
    </div>
  )
}
