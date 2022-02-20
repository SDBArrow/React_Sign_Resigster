import React, { Component } from 'react';


class Test extends Component {
    state = {}
    render() {
        return (
            <product class="flex flex-col gap-2 sm:flex-row sm:w-full sm:gap-3">
                <img class="rounded-lg sm:h-36" src="https://i.imgur.com/oLn9yvJ.jpg"/>
                    <span class="text-gray-700 flex flex-col gap-1 items-end">
                        <span class="text-xl font-bold sm:mb-1">和兔兔一起用 Tailwind CSS 快速上手漂亮的原件開發</span>
                        <span class="text-sm">
                            相信有在接觸前端領域的人或多或少都會聽過 Tailwind CSS，或是有一些人已經對它很熟悉、甚至是有用過了。
                            Tailwind 是一個 ...
                        </span>
                        <span class="text-red-600 font-black text-xl">$ 790</span>
                    </span>
            </product>
        );
    }
}

export default Test;


