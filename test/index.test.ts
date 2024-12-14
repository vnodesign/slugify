import { describe, expect, it } from 'vitest'
import { slugify } from '../src'

describe('slugify', () => {
  it('should convert a string to a URL-friendly slug', () => {
    expect(slugify('Hello World')).toEqual('hello-world')
    expect(slugify('This is a test!')).toEqual('this-is-a-test')
  })

  it('should handle Vietnamese diacritics', () => {
    expect(slugify('Chào bạn')).toEqual('chao-ban')
    expect(slugify('Hôm nay trời đẹp quá!')).toEqual('hom-nay-troi-dep-qua')
  })

  it('should remove special characters', () => {
    expect(slugify('Hello @#$%&*() World!')).toEqual('hello-world')
    expect(slugify('123#Test!!!')).toEqual('123-test')
  })

  it('should handle trailing and consecutive spaces or hyphens', () => {
    expect(slugify('   Hello   World   ')).toEqual('hello-world')
    expect(slugify('Hello---World')).toEqual('hello-world')
    expect(slugify('--Hello World--')).toEqual('hello-world')
  })

  it('should return an empty string if input is empty or contains no valid characters', () => {
    expect(slugify('')).toEqual('')
    expect(slugify('!!!')).toEqual('')
  })

  it('should handle strings with only numbers', () => {
    expect(slugify('123 456')).toEqual('123-456')
    expect(slugify('007 James Bond')).toEqual('007-james-bond')
  })

  it('should handle strings with mixed cases', () => {
    expect(slugify('HeLLo WoRLd')).toEqual('hello-world')
    expect(slugify('JAVAscript SlugIFY')).toEqual('javascript-slugify')
  })
})
