import React, { Component } from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../constants'

/**
 * Render the footer with filter links
 */
class Footer extends Component {
  render(){
    return (
      <div>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
          All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
          Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </div>
    )
  }
}

export default Footer